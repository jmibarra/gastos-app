import React, {useState} from 'react';
import firebaseUtils from '../../../utils/FirebaseUtils';
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
} from "reactstrap";
import Form from "./Form/Form.js"
const InsertModalComponent = (props) => {

    const [formItem, setformItem] = useState({
        motivo: '',
        fecha: '',
        fecha_cierre: '',
        total: '',
        estado: 'Estimado',
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
                <Form handleChange={handleChange}/>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>doPost(props.tipo)}>Insertar</button>{"   "}
              <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default InsertModalComponent;