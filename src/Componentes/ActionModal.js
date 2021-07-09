import React, { useState } from 'react';

import { Container, Row, Col,Modal, ModalBody, ModalHeader, ModalFooter,
    Form, FormGroup, Label, Input, FormText,InputGroup, InputGroupAddon,
    InputGroupText } from "reactstrap";
  import { AiFillPlusCircle } from 'react-icons/ai';
  
  import $ from 'jquery';
  import Popper from 'popper.js';
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.min.js";


const ActionModalComponent = (props) => {

    return(
        <Modal isOpen={props.isOpen}>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Motivo: </label>
                <br />
                <input type="text" className="form-control" name="motivo" onChange={props.handleChange} required/>
                <br />
                <FormGroup>
                  <Label for="exampleDate">Fecha:</Label>
                  <Input
                    type="date"
                    name="fecha"
                    id="fecha"
                    placeholder="Fecha de gasto"
                    onChange={props.handleChange}
                  />
                </FormGroup>
                <label>Total: </label>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>$</InputGroupText>
                  </InputGroupAddon>
                  <input type="text" className="form-control" name="total" onChange={props.handleChange}/>
                </InputGroup>
                <br />
                <label>Estado: </label>
                <br />
                <select className="form-control" name="estado" onChange={props.handleChange} required>
                  <option value="">Ninguno</option>
                  <option value="Estimado">Estimado</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Pago">Pago</option>
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>props.doPost(props.tipo)}>Insertar</button>{"   "}
              <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )


            


}

export default ActionModalComponent;