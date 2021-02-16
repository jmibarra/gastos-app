import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col,Modal, ModalBody, ModalHeader, ModalFooter,
  Form, FormGroup, Label, Input, FormText,InputGroup, InputGroupAddon,
  InputGroupText } from "reactstrap";
import { AiFillPlusCircle } from 'react-icons/ai';

import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import firebase from './firebase'; //Remover luego de sacar todo a clase
import firebaseUtils from './utils/FirebaseUtils.js';
import NavBarComponent from './componentes/Navbar.js';
import StatusBadgeComponent from './componentes/StatusBadge.js';
import ItemTableComponent from './componentes/ItemTable.js'


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
    this.peticionGetGastos("2020","01");
    this.peticionGetIngresos("2020","01");
  }

  // TODO: 1) Armar forms para insertar gastos, ingresos y peticionPost
  // TODO: 3) Armar tablas que sumaricen datos
  // TODO: 4) Mejorar las tablas para poder ingresar estados y fechas con calendario y Dropdown
  // TODO: 5) Edit y delete con iconos
  // TODO: 6) Manejo de mes y año desde la tabla principal
  // TODO: 7) Separar las tablas en componentes para que la página principal quede bien compacta


  /******************************** FUNCIONES *********************************/

  doPost = (tipo) => {
    firebaseUtils.peticionPost(this.state.formItem,this.state.año,this.state.mes,tipo)
    this.setState({modalInsertarIngresos: false});
    this.setState({modalInsertarGastos: false});
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

          <Modal isOpen={this.state.modalInsertarGastos}>
          <ModalHeader>Insertar Gasto</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Motivo: </label>
              <br />
              <input type="text" className="form-control" name="motivo" onChange={this.handleChange} required/>
              <br />
              <FormGroup>
                <Label for="exampleDate">Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  id="fecha"
                  placeholder="Fecha de gasto"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <label>Total: </label>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <input type="text" className="form-control" name="total" onChange={this.handleChange}/>
              </InputGroup>
              <br />
              <label>Estado: </label>
              <br />
              <select className="form-control" name="estado" onChange={this.handleChange} required>
                <option value="">Ninguno</option>
                <option value="Estimado">Estimado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Pago">Pago</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>this.doPost("gastos")}>Insertar</button>{"   "}
            <button className="btn btn-danger" onClick={()=>this.setState({modalInsertarGastos: false})}>Cancelar</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertarIngresos}>
        <ModalHeader>Insertar Ingresos</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Motivo: </label>
            <br />
            <input type="text" className="form-control" name="motivo" onChange={this.handleChange} required/>
            <br />
            <FormGroup>
              <Label for="exampleDate">Fecha:</Label>
              <Input
                type="date"
                name="fecha"
                id="fecha"
                placeholder="Fecha de gasto"
                onChange={this.handleChange}
              />
            </FormGroup>
            <label>Total: </label>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <input type="text" className="form-control" name="total" onChange={this.handleChange}/>
            </InputGroup>
            <br />
            <label>Estado: </label>
            <br />
            <select className="form-control" name="estado" onChange={this.handleChange} required>
              <option value="">Ninguno</option>
              <option value="Estimado">Estimado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Pago">Pago</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>this.doPost("ingresos")}>Insertar</button>{"   "}
          <button className="btn btn-danger" onClick={()=>this.setState({modalInsertarIngresos: false})}>Cancelar</button>
        </ModalFooter>
      </Modal>

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Motivo: </label>
              <br />
              <input type="text" className="form-control" name="motivo" onChange={this.handleChange} value={this.state.formItem && this.state.formItem.motivo}/>
              <br />
              <FormGroup>
                <Label for="exampleDate">Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  id="fecha"
                  placeholder="Fecha de gasto"
                  value={this.state.formItem && this.state.formItem.fecha}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <label>Total: </label>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <input type="text" className="form-control" name="total" onChange={this.handleChange} value={this.state.formItem && this.state.formItem.total}/>
              </InputGroup>
              <br />
              <label>Estado: </label>
              <br />
              <select className="form-control" name="estado" onChange={this.handleChange} value={this.state.formItem && this.state.formItem.estado}>
                <option value="Estimado">Estimado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Pago">Pago</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>this.updateItem(this.state.elementoEdicion)}>Editar</button>{"   "}
            <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
