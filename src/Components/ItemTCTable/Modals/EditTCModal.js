import React, { useContext } from 'react';
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
} from "reactstrap";
import { SessionContext } from '../../../contexts/Session';
import firebaseUtils from "../../../utils/FirebaseUtils";
import TCForm from "./Form/TCForm";


const EditTCModalComponent = (props) => {

    const { sessionState} = useContext(SessionContext)

    const updateItem = () => {
        firebaseUtils.peticionPut(props.formItem,props.year,props.month,props.tipo,props.formItemId,sessionState.loggedIn ? sessionState.user.uid : "");
        props.closeModal();
    }

    return(
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Editar Registro</ModalHeader>
            <ModalBody>
                <TCForm handleChange={props.handleChange} formItem={props.formItem} />
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary" onClick={()=>updateItem()}>Editar</button>{"   "}
                <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )

}

export default EditTCModalComponent;



    
