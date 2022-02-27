import React, { useState,Component } from "react"
import { Container, Row, Col,botron,Toast, ToastBody, ToastHeader} from "reactstrap"
import { AiFillPlusCircle } from 'react-icons/ai'

import firebase from './firebase'; //Remover luego de sacar todo a clase
import firebaseUtils from './utils/FirebaseUtils.js'
import NavBarComponent from './Componentes/Navbar.js'
import ItemTableComponent from './Componentes/ItemTable.js'
import ItemTCTableComponent from './Componentes/ItemTCTable.js'
import InsertModalComponent from './Componentes/InsertModal.js'
import EditModalComponent from './Componentes/EditModal.js'


class App extends Component {

  state = {
    dataGastosTC: [],
    elementoEdicion:'',
    modalInsertarGastos: false,
    modalInsertarIngresos: false,
    modalInsertarGastosTC:false,
    modalEditar: false,
    año:'',
    mes:'',
    mes_name:'',
    ingresos_mes: 0,
    gastos_mes:0,
    gastos_tc_mes:0,
    ahorros_mes:0,
    id: 0
  };

  async componentDidMount() {

    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    this.selectDate(yyyy,mm)
  }

  /******************************** FUNCIONES *********************************/



  closeModal = () => {
    this.setState({modalInsertarIngresos: false})
    this.setState({modalInsertarGastos: false})
    this.setState({modalInsertarGastosTC: false})
    this.setState({modalEditar: false})
  }

  updateItem = (tipo) => {
    firebaseUtils.peticionPut(this.state.formItem,this.state.año,this.state.mes,tipo,this.state.id)
    this.setState({modalEditar: false});
  }

    peticionGetGastosTC = (año,mes) => {
        firebase.child("tc").child(año).child(mes).on("value", (tc) => {
                if (tc.val() !== null) {
                this.setState({ ...this.state.dataGastosTC, dataGastosTC: tc.val() });
                this.calcularGastosTCTotales(tc.val());
            } else {
                this.setState({ dataGastosTC: [] });
                this.setState({gastos_tc_mes: 0});
            }
        });
    };

    calcularIngresosTotales = (ingresos) => {

        let ingresosTotales = 0;
        Object.keys(ingresos).map(i=> {
            ingresosTotales += parseInt(ingresos[i].total);
        })

        this.setState({ingresos_mes: ingresosTotales});

    };

    calcularGastosTotales = (gastos) => {

        let gastosTotales = 0;
        Object.keys(gastos).map(i=> {
            gastosTotales += parseInt(gastos[i].total);
        })

        this.setState({gastos_mes: gastosTotales});

    };

    calcularGastosTCTotales = (gastos) => {

        let gastosTotales = 0;
        Object.keys(gastos).map(i=> {
            gastosTotales += parseInt(gastos[i].total);
        })

        this.setState({gastos_tc_mes: gastosTotales});

    };

    selectDate = (año, mes) => {

        this.setState({año:año});
        this.setState({mes:mes});
        this.setState({mes_name:this.getMonthName(mes)});
        this.peticionGetGastosTC(año,mes);
  
    }

  //Obtengo el nombre del mes desde el string
  getMonthName = (mes) => {
    var monthNames = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];

    let monthName = monthNames[parseInt(mes,10)-1] //Al ser un array enero es el 0 por eso al numero de mes se le resta 1.

    return monthName
  }

  seleccionarCanal=async(item, id, caso,tipo)=>{
    await this.setState({formItem: item, id: id});

    (caso==="Editar")?this.setState({modalEditar: true,elementoEdicion: tipo}):
    firebaseUtils.peticionDelete(this.state.formItem,this.state.año,this.state.mes,tipo,this.state.id)
  }

    /****************************************************************************/

  render() {

    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col><NavBarComponent year={this.state.año} month={this.state.mes} monthName={this.state.mes_name} selectDate={this.selectDate}/></Col>
          </Row>
          <Row className="p-3 bg-dark my-2 rounded">
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Ingresos</h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3>$ {this.state.ingresos_mes}</h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3> Gastos </h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3> $ {this.state.gastos_mes} </h3> <br/>
                        <h3> $ {this.state.gastos_tc_mes} (TC)</h3>
                        <hr></hr>
                        <h3> $ {parseInt(this.state.gastos_tc_mes) + parseInt(this.state.gastos_mes)}</h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Sobrante</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ {parseInt(this.state.ingresos_mes) - parseInt(this.state.gastos_tc_mes) + parseInt(this.state.gastos_mes)} </h3>
                    </ToastBody>
                </Toast>
                <Toast>
                    <ToastHeader>
                        <h3>Ahorros</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ {this.state.ahorros_mes} </h3>
                    </ToastBody>
                </Toast>
            </Col>   
          </Row>
          <Row>
            <Col xs="6">
              <h1> Ingresos <button className="btn btn-success" onClick={()=>this.setState({modalInsertarIngresos: true})}><AiFillPlusCircle/></button> </h1>
              <ItemTableComponent tipo="ingresos" seleccionarCanal={this.seleccionarCanal}/>
            </Col>
            <Col xs="6">
              <h1> Gastos <button className="btn btn-success" onClick={()=>this.setState({modalInsertarGastos: true})}><AiFillPlusCircle/></button> </h1>
              <ItemTableComponent tipo="gastos" seleccionarCanal={this.seleccionarCanal}/>
            </Col>
          </Row>
          <Row>
              
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1> Gastos Tarjeta de crédito <button className="btn btn-success" onClick={()=>this.setState({modalInsertarGastosTC: true})}><AiFillPlusCircle/></button> </h1>
                <ItemTCTableComponent dataItem={this.state.dataGastosTC} totales={this.state.gastos_tc_mes} tipo="tc" seleccionarCanal={this.seleccionarCanal}/>
            </Col>
          </Row>
        </Container>
      
        <InsertModalComponent isOpen={this.state.modalInsertarIngresos} title={"Insertar Ingresos"} tipo={"ingresos"} closeModal={this.closeModal} year={this.state.año} month={this.state.mes}/>
        <InsertModalComponent isOpen={this.state.modalInsertarGastos} title={"Insertar gastos"} tipo={"gastos"} closeModal={this.closeModal} year={this.state.año} month={this.state.mes}/>
        <InsertModalComponent isOpen={this.state.modalInsertarGastosTC} title={"Insertar gastos TC"} tipo={"tc"} closeModal={this.closeModal} year={this.state.año} month={this.state.mes}/>
        
        <EditModalComponent isOpen={this.state.modalEditar} handleChange={this.handleChange} formItem={this.state.formItem} updateItem={this.updateItem} elementoEdicion={this.state.elementoEdicion} closeModal={this.closeModal} />

      </div>
    );
  }
}

export default App;