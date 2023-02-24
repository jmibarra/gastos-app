import React, { useState,useContext } from 'react'
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
    Card,
    CardBody,
} from "reactstrap";
import firebaseUtils from '../../utils/FirebaseUtils';
import { SessionContext } from '../../contexts/Session';
import CreditCardForm from './CreditCardForm';

const CreditCardModal = ({creditCardModalOpen,toogleCreditCardModal}) => {

    const { sessionState } = useContext(SessionContext)

    const [formData,setFormData] = useState(
        {
            expiry: "",
            expiryyear: "",
            focus: "",
            alias: "",
            cvc:"",
            number: "",
            status: "Activa"
        }
    )

    const insertCreditCard = () => {
        firebaseUtils.peticionPost2(formData,`${sessionState.loggedIn ? sessionState.user.uid : ""}/tc`)
        toogleCreditCardModal()

    }
    
    return (
        <>
            <Modal isOpen={creditCardModalOpen} fullscreen="lg" size="lg">
                <ModalHeader>Tarjetas de crédito</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            Aca va la tablita de TCs
                        </CardBody>
                    </Card>  
                    <CreditCardForm formData={formData} setFormData={setFormData} />
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => insertCreditCard() }>Crear</button>{"   "}
                    <button className="btn btn-danger" onClick={() => toogleCreditCardModal() } >Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreditCardModal