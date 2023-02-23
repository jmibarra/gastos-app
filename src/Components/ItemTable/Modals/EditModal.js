import React, { useContext } from 'react';
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
} from "reactstrap";
import Form from "./Form/Form.js"
import firebaseUtils from "../../../utils/FirebaseUtils";
import { SessionContext } from '../../../contexts/Session.js';


const EditModalComponent = (props) => {

    const { sessionState } = useContext(SessionContext)

    const updateItem = () => {
        firebaseUtils.peticionPut(props.formItem,props.year,props.month,props.type,props.formItemId,sessionState.loggedIn ? sessionState.user.uid : "");
        props.closeModal();
    }

    return(
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Editar Registro</ModalHeader>
            <ModalBody>
                <Form handleChange={props.handleChange} formItem={props.formItem} type={props.type}/>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary" onClick={()=>updateItem()}>Editar</button>{"   "}
                <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )

}

export default EditModalComponent;



    
