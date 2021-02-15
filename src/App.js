import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Badge, Container, Row, Col,Modal, ModalBody, ModalHeader, ModalFooter,
  Form, FormGroup, Label, Input, FormText } from "reactstrap";

import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



import firebase from './firebase'; //Remover luego de sacar todo a clase
import NavBarComponent from './componentes/Navbar.js';
import firebaseUtils from './utils/FirebaseUtils.js';

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

  componentDidMount() {
    firebaseUtils.petitionGetAvailableYears();
    this.peticionGet("2020","01","gastos");
    this.peticionGetIngresos("2020","01");

  }

  // TODO: 1) Armar forms para insertar gastos, ingresos y peticionPost
  // TODO: 2) Armar tablas para tomar los datos
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

  peticionGet = (año,mes,tipo) => {
    firebase.child(tipo).child(año).child(mes).on("value", (motivo) => {
      if (motivo.val() !== null) {
        this.setState({ ...this.state.dataGastos, dataGastos: motivo.val() });
      } else {
        this.setState({ dataGastos: [] });
      }
    });
  };

  peticionGetIngresos = (año,mes) => {
    firebase.child("ingresos").child(año).child(mes).on("value", (motivo) => {
      if (motivo.val() !== null) {
        this.setState({ ...this.state.dataIngresos, dataIngresos: motivo.val() });
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
    console.log(this.state.formItem);
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
            <h1> Ingresos <button className="btn btn-success" onClick={()=>this.setState({modalInsertarIngresos: true})}>Insertar ingreso</button> </h1>
             <table className="table table-bordered">
               <thead>
                 <tr>
                   <th>Motivo</th>
                   <th>Fecha</th>
                   <th>Importe</th>
                   <th>Estado</th>
                   <th>Acciones</th>
                 </tr>
               </thead>
               <tbody>
                 {Object.keys(this.state.dataIngresos).map(i=>{
                   return <tr key={i}>
                     <td>{this.state.dataIngresos[i].motivo}</td>
                     <td>{this.state.dataIngresos[i].fecha}</td>
                     <td>{this.state.dataIngresos[i].total}</td>
                     <td>
                       {(() => {
                         switch (this.state.dataIngresos[i].estado) {
                             case "Pendiente":   return <Badge href="#" color="secondary">{this.state.dataIngresos[i].estado}</Badge>;
                             case "Estimado": return <Badge href="#" color="warning">{this.state.dataIngresos[i].estado}</Badge>;
                             case "Pago":  return <Badge href="#" color="success">{this.state.dataIngresos[i].estado}</Badge>;
                             default:      return <Badge href="#" color="primary">{this.state.dataIngresos[i].estado}</Badge>;
                           }
                         })()}
                     </td>
                     <td>
                       <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Editar',"ingresos")}>Editar</button> {"   "}
                       <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Eliminar',"ingresos")}>Eliminar</button>
                     </td>

                   </tr>
                 })}
               </tbody>
             </table>
           </Col>
           <Col xs="6">
              <h1> Gastos <button className="btn btn-success" onClick={()=>this.setState({modalInsertarGastos: true})}>Insertar Gasto</button> </h1>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Motivo</th>
                    <th>Fecha</th>
                    <th>Importe</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.state.dataGastos).map(i=>{
                   // console.log(i);
                    return <tr key={i}>
                      <td>{this.state.dataGastos[i].motivo}</td>
                      <td>{this.state.dataGastos[i].fecha}</td>
                      <td>{this.state.dataGastos[i].total}</td>
                      <td>
                        {(() => {
                          switch (this.state.dataGastos[i].estado) {
                              case "Pendiente":   return <Badge href="#" color="secondary">{this.state.dataGastos[i].estado}</Badge>;
                              case "Estimado": return <Badge href="#" color="warning">{this.state.dataGastos[i].estado}</Badge>;
                              case "Pago":  return <Badge href="#" color="success">{this.state.dataGastos[i].estado}</Badge>;
                              default:      return <Badge href="#" color="primary">{this.state.dataGastos[i].estado}</Badge>;
                            }
                          })()}
                      </td>
                      <td>
                        <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Editar',"gastos")}>Editar</button> {"   "}
                        <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Eliminar',"gastos")}>Eliminar</button>
                      </td>

                    </tr>
                  })}
                </tbody>
              </table>
            </Col>
        </Row>

        </Container>
        <div className="container">

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
            <input type="text" className="form-control" name="total" onChange={this.handleChange}/>
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
          <input type="text" className="form-control" name="total" onChange={this.handleChange}/>
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
            <input type="text" className="form-control" name="total" onChange={this.handleChange} value={this.state.formItem && this.state.formItem.total}/>
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
      </div>
    );
  }
}

export default App;
