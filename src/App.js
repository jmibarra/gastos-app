import React, { useState } from "react"
import { Container, Row, Col,Toast, ToastBody, ToastHeader} from "reactstrap"
import { AiFillPlusCircle } from 'react-icons/ai'

import NavBarComponent from './Componentes/Navbar.js'
import ItemTableComponent from './Componentes/ItemTable.js'
import ItemTCTableComponent from './Componentes/ItemTCTable.js'
import DateUtils from "./utils/DateUtils.js"
import InsertModalComponent from './Componentes/InsertModal.js'
import EditModalComponent from './Componentes/EditModal.js'


function App() {

    const [year, setYear] = useState('2022');
    const [month, setMonth] = useState('02');
    const [monthName, setMonthName] = useState('febrero');

    const handleDateChange = (year,month) => {
        setMonth(month);
        setYear(year);
        setMonthName(DateUtils.getMonthName(month));
    }    

//   state = {
//     dataGastosTC: [],
//     elementoEdicion:'',
//     modalInsertarGastosTC:false,
//     modalEditar: false,
//     ingresos_mes: 0,
//     gastos_mes:0,
//     gastos_tc_mes:0,
//     ahorros_mes:0,
//     id: 0
//   };

  /******************************** FUNCIONES *********************************/



//   closeModal = () => {
//     this.setState({modalInsertarIngresos: false})
//     this.setState({modalInsertarGastos: false})
//     this.setState({modalInsertarGastosTC: false})
//     this.setState({modalEditar: false})
//   }

//   updateItem = (tipo) => {
//     firebaseUtils.peticionPut(this.state.formItem,this.state.año,this.state.mes,tipo,this.state.id)
//     this.setState({modalEditar: false});
//   }

    // calcularIngresosTotales = (ingresos) => {

    //     let ingresosTotales = 0;
    //     Object.keys(ingresos).map(i=> {
    //         ingresosTotales += parseInt(ingresos[i].total);
    //     })

    //     this.setState({ingresos_mes: ingresosTotales});

    // };

    // calcularGastosTotales = (gastos) => {

    //     let gastosTotales = 0;
    //     Object.keys(gastos).map(i=> {
    //         gastosTotales += parseInt(gastos[i].total);
    //     })

    //     this.setState({gastos_mes: gastosTotales});

    // };

    // calcularGastosTCTotales = (gastos) => {

    //     let gastosTotales = 0;
    //     Object.keys(gastos).map(i=> {
    //         gastosTotales += parseInt(gastos[i].total);
    //     })

    //     this.setState({gastos_tc_mes: gastosTotales});

    // };

  

//   seleccionarCanal=async(item, id, caso,tipo)=>{
//     await this.setState({formItem: item, id: id});

//     (caso==="Editar")?this.setState({modalEditar: true,elementoEdicion: tipo}):
//     firebaseUtils.peticionDelete(this.state.formItem,this.state.año,this.state.mes,tipo,this.state.id)
//   }

    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col><NavBarComponent year={year} month={month} monthName={monthName} handleDateChange={handleDateChange}/></Col>
          </Row>
          <Row className="p-3 bg-dark my-2 rounded">
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Ingresos</h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3>$ </h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3> Gastos </h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3> $  </h3> <br/>
                        <h3> $ (TC)</h3>
                        <hr></hr>
                        <h3> $ </h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Sobrante</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $  </h3>
                    </ToastBody>
                </Toast>
                <Toast>
                    <ToastHeader>
                        <h3>Ahorros</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ </h3>
                    </ToastBody>
                </Toast>
            </Col>   
          </Row>
          <Row>
            <Col xs="6">
              <ItemTableComponent tipo="ingresos" year={year} month={month}/>
            </Col>
            <Col xs="6">
              <ItemTableComponent tipo="gastos" year={year} month={month}/>
            </Col>
          </Row>
          <Row> 
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1> Gastos Tarjeta de crédito <button className="btn btn-success" onClick={()=>this.setState({modalInsertarGastosTC: true})}><AiFillPlusCircle/></button> </h1>
                <ItemTCTableComponent tipo="tc" year={year} month={month}/>
            </Col>
          </Row>
        </Container>
      
        {/* 
        <InsertModalComponent isOpen={this.state.modalInsertarGastosTC} title={"Insertar gastos TC"} tipo={"tc"} closeModal={this.closeModal} year={this.state.año} month={this.state.mes}/>
        
        <EditModalComponent isOpen={this.state.modalEditar} handleChange={this.handleChange} formItem={this.state.formItem} updateItem={this.updateItem} elementoEdicion={this.state.elementoEdicion} closeModal={this.closeModal} /> */}

      </div>
    );
}

export default App;