import React, {useState,useContext} from 'react';

import firebaseUtils from '../../../utils/FirebaseUtils';
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
} from "reactstrap";
import Form from "./Form/Form.js"

import { SessionContext } from '../../../contexts/Session';


const InsertModalComponent = (props) => {

    const { sessionState } = useContext(SessionContext)

    const [formItem, setformItem] = useState({
        motivo: '',
        fecha: '',
        total: '',
        categoria: '',
        estado: 'Estimado',
      });
    
        
    const handleChange=e=>{
        setformItem({
            ...formItem,
            [e.target.name]: e.target.value
        })
    }
        
    const doPost = () => {
        firebaseUtils.peticionPost(formItem,`${sessionState.loggedIn ? sessionState.user.uid : ""}/${props.type}/${props.year}/${props.month}`)
        props.closeModal();
    }

    return(
        <Modal isOpen={props.isOpen}>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalBody>
                <Form handleChange={handleChange} type={props.type}/>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>doPost(props.type)}>Insertar</button>{"   "}
              <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default InsertModalComponent;