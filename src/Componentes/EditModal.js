import React from 'react';

import { Modal, ModalBody, ModalHeader, ModalFooter,
    FormGroup, Label, Input,InputGroup, InputGroupAddon,
    InputGroupText } from "reactstrap";

  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.min.js";


const EditModalComponent = (props) => {

    return(
      <Modal isOpen={props.isOpen}>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Motivo: </label>
              <br />
              <input type="text" className="form-control" name="motivo" onChange={props.handleChange} value={props.formItem && props.formItem.motivo}/>
              <br />
              <FormGroup>
                <Label for="exampleDate">Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  id="fecha"
                  placeholder="Fecha de gasto"
                  value={props.formItem && props.formItem.fecha}
                  onChange={props.handleChange}
                />
              </FormGroup>
              <label>Total: </label>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <input type="text" className="form-control" name="total" onChange={props.handleChange} value={props.formItem && props.formItem.total}/>
              </InputGroup>
              <br />
              <label>Estado: </label>
              <br />
              <select className="form-control" name="estado" onChange={props.handleChange} value={props.formItem && props.formItem.estado}>
                <option value="Estimado">Estimado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Pago">Pago</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>props.updateItem(props.elementoEdicion)}>Editar</button>{"   "}
            <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
          </ModalFooter>
        </Modal>
    )

}

export default EditModalComponent;