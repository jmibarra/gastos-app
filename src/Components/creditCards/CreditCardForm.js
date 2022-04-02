import React, { useState } from 'react'
import Cards from "react-credit-cards";
import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
    Form,
    FormGroup, 
    Label, 
    Input,
} from "reactstrap";

const CreditCardForm = ({creditCardModalOpen,toogleCreditCardModal}) => {

    const [formData,setFormData] = useState(
        {
            expiry: "",
            expiryyear: "",
            focus: "",
            alias: "",
            csv:"",
            number: ""
        }
    )

    const handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };
    
    const handleChange=e=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const addSpace = (e) => {
        const { value, id } = e.target;
        var ele = document.getElementById(id);
        if (value.length === 4 || value.length === 9 || value.length === 14)
          ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    };

    const removeSpecial = (e) => {
        var invalidChars = ["-", "+", "e", "E", " ", "."];
        if (invalidChars.includes(e.key)) {
          e.preventDefault();
        }
      };

    const insertCreditCard = () => {
        console.log(formData)
    }
    
    return (
        <>
            <Modal isOpen={creditCardModalOpen} fullscreen="lg" size="lg">
                <ModalHeader>Modal de TC!</ModalHeader>
                <ModalBody>
                    <Cards
                        locale={{ valid: "Expira" }}
                        placeholders={{ name: "ALIAS TC" }}
                        csv={formData.csv}
                        expiry={formData.expiry}
                        expiryyear={formData.expiryyear}
                        focused={formData.focus}
                        name={formData.alias}
                        number={formData.number}
                    />
                    <div>
                        <Form>
                            <FormGroup floating>
                                <Input
                                    id="number"
                                    name="number"
                                    placeholder="Número de tarjeta"
                                    type="text"
                                    onChange={handleChange}
                                    maxLength="19"
                                    className="form-control form-control-lg"
                                    onKeyDown={removeSpecial}
                                    onPaste={(e) => e.preventDefault()}
                                    onKeyPress={addSpace}
                                    onFocus={handleInputFocus}
                                />
                                <Label for="number">
                                    Numero de tarjeta
                                </Label>
                            </FormGroup>
                        </Form>
                    </div>    
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => insertCreditCard() }>Crear</button>{"   "}
                    <button className="btn btn-danger" onClick={() => toogleCreditCardModal() } >Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreditCardForm