import React, { useState, useContext, useEffect } from 'react'
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
import CreditCardListTable from './CreditCardListTable';

const CreditCardModal = ({creditCardModalOpen,toogleCreditCardModal}) => {

    const { sessionState } = useContext(SessionContext)
    const [creditCards, setCreditCards] = useState([]);
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

    useEffect(()=> {
        fetchCreditCardsData();
    },[creditCards]);

    const insertCreditCard = () => {
        firebaseUtils.peticionPost(formData,`(${sessionState.loggedIn ? sessionState.user.uid : ""})/tc`)
        toogleCreditCardModal()
    }

    async function fetchCreditCardsData(){
        let responseObject = await firebaseUtils.peticionGet((sessionState.loggedIn ? sessionState.user.uid : "")+"/tc");
        if(responseObject)
            setCreditCards(responseObject)
    }
    
    return (
        <>
            <Modal isOpen={creditCardModalOpen} fullscreen="lg" size="lg">
                <ModalHeader>Tarjetas de crédito</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <CreditCardListTable creditCards={creditCards}/>
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