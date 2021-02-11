import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Row, Col,Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import NavBarComponent from './Componentes/Navbar.js';

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
      mes:'',
      año:''
    },
    id: 0
  };


  peticionGet = (año,mes,tipo) => {
    firebase.child(año).child(mes).child(tipo).on("value", (motivo) => {
      if (motivo.val() !== null) {
        this.setState({ ...this.state.dataGastos, dataGastos: motivo.val() });
      } else {
        this.setState({ dataGastos: [] });
      }
    });
  };

  //Construyo la petición para el post en firebase indicando el año, el mes y el tipo de item(Gasto o ingreso)
  peticionPost=(año,mes,tipo)=>{
    firebase.child(año).child(mes).child(tipo).push(this.state.formItem,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalInsertar: false});
  }

  peticionPut=()=>{
    firebase.child(`canales/${this.state.id}`).set(
      this.state.formItem,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalEditar: false});
  }

  peticionDelete=()=>{
    if(window.confirm(`Estás seguro que deseas eliminar el canal ${this.state.formItem && this.state.formItem.canal}?`))
    {
    firebase.child(`canales/${this.state.id}`).remove(
      error=>{
        if(error)console.log(error)
      });
    }
  }

  handleChange=e=>{
    this.setState({formItem:{
      ...this.state.formItem,
      [e.target.name]: e.target.value
    }})
    console.log(this.state.formItem);
  }

  seleccionarCanal=async(canal, id, caso)=>{

    await this.setState({formItem: canal, id: id});

    (caso==="Editar")?this.setState({modalEditar: true}):
    this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet("2020","01","gastos");
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
                     <td>{this.state.dataGastos[i].estado}</td>
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
                      <td>{this.state.dataGastos[i].estado}</td>
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


          <br />

          <br />
          <br />




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
            <input type="text" className="form-control" name="estado" onChange={this.handleChange}/>
            <input type="hidden" className="form-control" name="año" value="2020"/>
            <input type="hidden" className="form-control" name="mes" value="enero"/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>this.peticionPost("2020","01","gastos")}>Insertar</button>{"   "}
          <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
        </ModalFooter>
      </Modal>



      <Modal isOpen={this.state.modalEditar}>
        <ModalHeader>Editar Registro</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Canal: </label>
            <br />
            <input type="text" className="form-control" name="canal" onChange={this.handleChange} value={this.state.form && this.state.form.canal}/>
            <br />
            <label>Fecha: </label>
            <br />
            <input type="text" className="form-control" name="fecha" onChange={this.handleChange} value={this.state.form && this.state.form.pais}/>
            <br />
            <label>Total: </label>
            <br />
            <input type="text" className="form-control" name="total" onChange={this.handleChange} value={this.state.form && this.state.form.idioma}/>
            <br />
            <label>Cantidad de Suscriptores (millones): </label>
            <br />
            <input type="text" className="form-control" name="suscriptores" onChange={this.handleChange} value={this.state.form && this.state.form.suscriptores}/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
          <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
        </ModalFooter>
      </Modal>
        </div>
      </div>
    );
  }
}

export default App;
