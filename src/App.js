import React, { Component } from "react";
import { Badge, Container, Row, Col,Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";


import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import firebase from './firebase'; //Remover luego de sacar todo a clase
import NavBarComponent from './componentes/Navbar.js';
import firebaseUtils from './utils/FirebaseUtils.js';

class App extends Component {

  // TODO: 1) Armar forms para insertar gastos, ingresos y peticionPost
  // TODO: 2) Armar tablas para tomar los datos
  // TODO: 3) Armar tablas que sumaricen datos
  // TODO: 4) Mejorar las tablas para poder ingresar estados y fechas con calendario y Dropdown
  // TODO: 5) Edit y delete con iconos
  // TODO: 6) Manejo de mes y año desde la tabla principal
  // TODO: 7) Separar las tablas en componentes para que la página principal quede bien compacta
  state = {
    dataGastos: [],
    modalInsertar: false,
    modalEditar: false,
    formItem:{
      motivo: '',
      fecha: '',
      total: '',
      estado: '',
    },
    id: 0
  };

  /******************************** FUNCIONES *********************************/

  doPost = (año,mes,tipo) => {
    firebaseUtils.peticionPost(this.state.formItem,año,mes,tipo)
    this.setState({modalInsertar: false});
  }

  updateItem = (año,mes,tipo) => {
    firebaseUtils.peticionPut(this.state.formItem,año,mes,tipo,this.state.id)
    this.setState({modalEditar: false});

  }

  componentDidMount() {
    this.peticionGet("2020","01","gastos");
    //firebaseUtils.peticionGet("2020","01","gastos");
  }

  /****************************************************************************/

  peticionGet = (año,mes,tipo) => {
    firebase.child(año).child(mes).child(tipo).on("value", (motivo) => {
      if (motivo.val() !== null) {
        this.setState({ ...this.state.dataGastos, dataGastos: motivo.val() });
      } else {
        this.setState({ dataGastos: [] });
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

  seleccionarCanal=async(item, id, caso)=>{

    await this.setState({formItem: item, id: id});

    (caso==="Editar")?this.setState({modalEditar: true}):
    firebaseUtils.peticionDelete(this.state.formItem,año,mes,tipo,this.state.id)

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
            <h1> Ingresos <button className="btn btn-success" onClick={()=>this.setState({modalInsertar: true})}>Insertar ingreso</button> </h1>
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
                       <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Editar')}>Editar</button> {"   "}
                       <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Eliminar')}>Eliminar</button>
                     </td>

                   </tr>
                 })}
               </tbody>
             </table>
           </Col>
           <Col xs="6">
              <h1> Gastos <button className="btn btn-success" onClick={()=>this.setState({modalInsertar: true})}>Insertar Gasto</button> </h1>
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
                        <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Editar')}>Editar</button> {"   "}
                        <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.dataGastos[i], i, 'Eliminar')}>Eliminar</button>
                      </td>

                    </tr>
                  })}
                </tbody>
              </table>
            </Col>
        </Row>

        </Container>
        <div className="container">

        <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>Insertar Gasto</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Motivo: </label>
            <br />
            <input type="text" className="form-control" name="motivo" onChange={this.handleChange}/>
            <br />
            <label>Fecha: </label>
            <br />
            <input type="text" className="form-control" name="fecha" onChange={this.handleChange}/>
            <br />
            <label>Total: </label>
            <br />
            <input type="text" className="form-control" name="total" onChange={this.handleChange}/>
            <br />
            <label>Estado: </label>
            <br />
            <select className="form-control" name="estado" onChange={this.handleChange}>
              <option value="Estimado">Estimado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Pago">Pago</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>this.doPost("2020","01","gastos")}>Insertar</button>{"   "}
          <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
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
            <label>Fecha: </label>
            <br />
            <input type="text" className="form-control" name="fecha" onChange={this.handleChange} value={this.state.formItem && this.state.formItem.fecha}/>
            <br />
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
          <button className="btn btn-primary" onClick={()=>this.updateItem("2020","01","gastos")}>Editar</button>{"   "}
          <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
        </ModalFooter>
      </Modal>
        </div>
      </div>
    );
  }
}

export default App;
