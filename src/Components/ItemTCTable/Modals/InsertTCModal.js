import React, {useState,useContext} from 'react';
import firebaseUtils from '../../../utils/FirebaseUtils';
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
} from "reactstrap";
import TCForm from './Form/TCForm';

import { SessionContext } from '../../../contexts/Session';

const InsertTCModalComponent = (props) => {

    const { sessionState } = useContext(SessionContext)

    const [formItem, setformItem] = useState({
        motivo: '',
        fecha: '',
        fecha_cierre: '',
        total: '',
        estado: 'Estimado',
        userUID: sessionState.loggedIn ? sessionState.user.uid : ""
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
                <TCForm handleChange={handleChange} />
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>doPost(props.type)}>Insertar</button>{"   "}
              <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default InsertTCModalComponent;