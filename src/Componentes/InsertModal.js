import React, {useState} from 'react';
import firebaseUtils from '../utils/FirebaseUtils'
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
    FormGroup, 
    Label, 
    Input,
    InputGroup, 
    InputGroupAddon,
    InputGroupText 
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const InsertModalComponent = (props) => {

    const [formItem, setformItem] = useState({
        motivo: '',
        fecha: '',
        fecha_cierre: '',
        total: '',
        estado: '',
      });
    
        
    const handleChange=e=>{
        setformItem({
            ...formItem,
            [e.target.name]: e.target.value
        })
    }
        
    const doPost = () => {
        firebaseUtils.peticionPost(formItem,props.year,props.month,props.tipo)
        props.closeModal();
        
    }

    return(
        <Modal isOpen={props.isOpen}>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Motivo: </label>
                <br />
                <input type="text" className="form-control" name="motivo" onChange={handleChange} required/>
                <br />
                <FormGroup>
                  <Label for="exampleDate">Fecha:</Label>
                  <Input
                    type="date"
                    name="fecha"
                    id="fecha"
                    placeholder="Fecha de gasto"
                    onChange={handleChange}
                  />
                </FormGroup>
                <label>Total: </label>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>$</InputGroupText>
                  </InputGroupAddon>
                  <input type="text" className="form-control" name="total" onChange={handleChange}/>
                </InputGroup>
                <br />
                <label>Estado: </label>
                <br />
                <select className="form-control" name="estado" onChange={handleChange} required>
                    <option value="" selected="selected">Elegir un estado...</option>
                    <option value="Estimado">Estimado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Pago">Pago</option>
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>doPost(props.tipo)}>Insertar</button>{"   "}
              <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default InsertModalComponent;