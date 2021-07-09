import React, { Component } from "react"
import { Container, Row, Col} from "reactstrap"
import { AiFillPlusCircle } from 'react-icons/ai'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import firebase from './firebase'; //Remover luego de sacar todo a clase
import firebaseUtils from './utils/FirebaseUtils.js'
import NavBarComponent from './Componentes/Navbar.js'
import ItemTableComponent from './Componentes/ItemTable.js'
import InsertModalComponent from './Componentes/InsertModal.js'
import EditModalComponent from './Componentes/EditModal.js'


class App extends Component {

  state = {
    dataGastos: [],
    dataIngresos: [],
    elementoEdicion:'',
    modalInsertarGastos: false,
    modalInsertarIngresos: false,
    modalEditar: false,
    formItem:{
      motivo: '',
      fecha: '',
      total: '',
      estado: '',
    },
    año:'2020',
    mes:'01',
    id: 0
  };

  async componentDidMount() {
    console.log(this.props);
    this.peticionGetGastos("2020","01");
    this.peticionGetIngresos("2020","01");
  }


  // TODO: 3) Armar tablas que sumaricen datos
  // TODO: 6) Manejo de mes y año desde la tabla principal
  // TODO: 7) Separar las tablas en componentes para que la página principal quede bien compacta
  // TODO: 9) Agregar una pantalla de vista principal(Para elegir mes y año)
  // TODO: 10) Sección de ahorros
  // TODO: 11) Manejo de parámetros desde la URL
  // TODO: 12) Validacion de datos en el insert y edit(Minimo un estado inicial y un nombre)


  /******************************** FUNCIONES *********************************/

  doPost = (tipo) => {
    firebaseUtils.peticionPost(this.state.formItem,this.state.año,this.state.mes,tipo)
    this.setState({modalInsertarIngresos: false});
    this.setState({modalInsertarGastos: false});
  }

  closeModal = () => {
    this.setState({modalInsertarIngresos: false})
    this.setState({modalInsertarGastos: false})
    this.setState({modalEditar: false})
  }

  updateItem = (tipo) => {
    firebaseUtils.peticionPut(this.state.formItem,this.state.año,this.state.mes,tipo,this.state.id)
    this.setState({modalEditar: false});
  }

  /****************************************************************************/

  peticionGetGastos = (año,mes) => {
    firebase.child("gastos").child(año).child(mes).on("value", (gastos) => {
      if (gastos.val() !== null) {
        this.setState({ ...this.state.dataGastos, dataGastos: gastos.val() });
      } else {
        this.setState({ dataGastos: [] });
      }
    });
  };

  peticionGetIngresos = (año,mes) => {
    firebase.child("ingresos").child(año).child(mes).on("value", (ingresos) => {
      if (ingresos.val() !== null) {
        this.setState({ ...this.state.dataIngresos, dataIngresos: ingresos.val() });
      } else {
        this.setState({ dataIngresos: [] });
      }
    });
  };

  handleChange=e=>{
    this.setState({formItem:{
      ...this.state.formItem,
      [e.target.name]: e.target.value
    }})
  }

  seleccionarCanal=async(item, id, caso,tipo)=>{
    await this.setState({formItem: item, id: id});

    (caso==="Editar")?this.setState({modalEditar: true,elementoEdicion: tipo}):
    firebaseUtils.peticionDelete(this.state.formItem,this.state.año,this.state.mes,tipo,this.state.id)
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col><NavBarComponent/></Col>
          </Row>
          <Row>
            <Col xs="6">
              <h1> Ingresos <button className="btn btn-success" onClick={()=>this.setState({modalInsertarIngresos: true})}><AiFillPlusCircle/></button> </h1>
              <ItemTableComponent dataItem={this.state.dataIngresos} tipo="ingresos" seleccionarCanal={this.seleccionarCanal}/>
            </Col>
            <Col xs="6">
              <h1> Gastos <button className="btn btn-success" onClick={()=>this.setState({modalInsertarGastos: true})}><AiFillPlusCircle/></button> </h1>
              <ItemTableComponent dataItem={this.state.dataGastos} tipo="gastos" seleccionarCanal={this.seleccionarCanal}/>
            </Col>
          </Row>
        </Container>
      
        <InsertModalComponent isOpen={this.state.modalInsertarIngresos} title={"Insertar Ingresos"} tipo={"ingresos"} handleChange={this.handleChange} doPost={this.doPost} closeModal={this.closeModal} />
        <InsertModalComponent isOpen={this.state.modalInsertarGastos} title={"Insertar gastos"} tipo={"gastos"} handleChange={this.handleChange} doPost={this.doPost} closeModal={this.closeModal} />
        
        <EditModalComponent isOpen={this.state.modalEditar} handleChange={this.handleChange} formItem={this.state.formItem} updateItem={this.updateItem} elementoEdicion={this.state.elementoEdicion} closeModal={this.closeModal} />

      </div>
    );
  }
}

export default App;
