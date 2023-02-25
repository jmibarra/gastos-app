import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../../../contexts/Session';
import firebaseUtils from '../../../../utils/FirebaseUtils';
import { 
    Form,
    FormGroup, 
    Label, 
    Input,
    InputGroup, 
    InputGroupText 

} from "reactstrap";

const TCForm = ({handleChange,formItem}) => {

    const { sessionState } = useContext(SessionContext)
    const [creditCards, setCreditCards] = useState([]);

    useEffect(()=> {
        fetchCreditCardsData();
    },[]);

    async function fetchCreditCardsData(){
        let responseObject = await firebaseUtils.peticionGet((sessionState.loggedIn ? sessionState.user.uid : "")+"/tc", {
            orderBy: "status",
            equalTo: 'Activa'
        });
        if(responseObject)
            setCreditCards(responseObject)
    }
    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="tarjeta">
                        Tarjeta
                    </Label>
                    <Input
                        id="tarjeta"
                        name="tarjeta"
                        type="select"
                        value={formItem && formItem.tarjeta}
                        onChange={handleChange}
                    >
                        <option>Selecciones una tarjeta...</option>
                        {Object.keys(creditCards).map(i=>{
                            return <option key={i} value={i}>
                                {creditCards[i].alias}
                            </option>
                        })}
                    </Input>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="fecha-cierre"
                        name="fecha_cierre"
                        placeholder="date placeholder"
                        type="date"
                        value={formItem && formItem.fecha_cierre}
                        onChange={handleChange}
                    />
                    <Label for="fecha-cierre">
                        Fecha de cierre
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="fecha"
                        name="fecha"
                        placeholder="date placeholder"
                        type="date"
                        value={formItem && formItem.fecha}
                        onChange={handleChange}
                    />
                    <Label for="fecha">
                        Fecha
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Label for="total">
                        Total
                    </Label>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <Input
                            id="total"
                            name="total"
                            type="text"
                            placeholder='Total'
                            value={formItem && formItem.total}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="estado">
                        Estado
                    </Label>
                    <Input
                    id="estado"
                    name="estado"
                    type="select"
                    value={formItem && formItem.estado}
                    onChange={handleChange}
                    >
                        <option>
                            Estimado
                        </option>
                        <option>
                            Pendiente
                        </option>
                        <option>
                            Pago
                        </option>
                    </Input>
                </FormGroup>
            </Form>
        </>
    )
}

export default TCForm