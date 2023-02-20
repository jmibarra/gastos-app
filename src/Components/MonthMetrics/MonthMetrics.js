import React, { useContext, useEffect, useState } from "react";
import { DateContext } from "../../contexts/Date";

import { Col,Collapse,Row,Toast, ToastBody, ToastHeader} from "reactstrap"
import { AiFillCreditCard,AiFillDollarCircle } from 'react-icons/ai';
import firebaseUtils from "../../utils/FirebaseUtils";
import { SessionContext } from "../../contexts/Session";

const MonthMetricsComponent = (props) => {

    const { state } = useContext(DateContext);
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [CCExpenses, setCCExpenses] = useState([]);

    const { sessionState} = useContext(SessionContext)
    
    const getTotalAmount = (incomes) => {
        let totalIncomes = 0;
        if (Object.keys(incomes).length > 0) {
            Object.keys(incomes).map(i => {
                totalIncomes += parseInt(incomes[i].total);
            })
        }
        return totalIncomes;
    };

    const totalIncomes = getTotalAmount(incomes);
    const regularExpenses = getTotalAmount(expenses);
    const creditCardExpenses = getTotalAmount(CCExpenses);

    useEffect(()=> {
        fetchIncomesData(state.year,state.month);
    },[incomes,state.year,state.month]);

    useEffect(()=> {
        fetchExpensesData(state.year,state.month)
    },[expenses,state.year,state.month]);

    useEffect(()=> {
        fetchCCExpensesData(state.year,state.month)
    },[CCExpenses,state.year,state.month]);

    async function fetchIncomesData(year,month){
        const responseObject = await firebaseUtils.peticionGet(year,month,"ingresos",sessionState.loggedIn ? sessionState.user.uid : "");
        if(responseObject)
            setIncomes(responseObject)
    }

    async function fetchExpensesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"gastos",sessionState.loggedIn ? sessionState.user.uid : "");
        if(responseObject)
            setExpenses(responseObject)
    }

    async function fetchCCExpensesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"tc",sessionState.loggedIn ? sessionState.user.uid : "");
        if(responseObject)
            setCCExpenses(responseObject)
    }

    return( 
        <>
        {sessionState.loggedIn && (
            <Collapse isOpen={props.metricsOpen}>
                <Row className="p-3 bg-dark my-2 rounded">
                    <Col xs="6" sm="4">
                        <Toast>
                            <ToastHeader>
                                <h3>Ingresos</h3>
                            </ToastHeader>
                            <ToastBody>
                                <h3><AiFillDollarCircle/> {totalIncomes}</h3>
                            </ToastBody>
                        </Toast>
                    </Col>
                    <Col xs="6" sm="4">
                        <Toast>
                            <ToastHeader>
                                <h3> Gastos </h3>
                            </ToastHeader>
                            <ToastBody>
                                <h3> <AiFillDollarCircle/>  {regularExpenses}</h3> <br/>
                                <h3><AiFillCreditCard/> {creditCardExpenses} </h3>
                                <hr></hr>
                                <h3> <AiFillDollarCircle/> {regularExpenses + creditCardExpenses} </h3>
                            </ToastBody>
                        </Toast>
                    </Col>
                    <Col xs="6" sm="4">
                        <Toast>
                            <ToastHeader>
                                <h3>Sobrante</h3>
                            </ToastHeader>
                            <ToastBody>
                            <h3> <AiFillDollarCircle/>{totalIncomes - (regularExpenses + creditCardExpenses)} </h3>
                            </ToastBody>
                        </Toast>
                        <Toast>
                            <ToastHeader>
                                <h3>Ahorros</h3>
                            </ToastHeader>
                            <ToastBody>
                            <h3> <AiFillDollarCircle/> </h3>
                            </ToastBody>
                        </Toast>
                    </Col>  
                </Row>
            </Collapse>
        )}
        </>
    );
}

export default MonthMetricsComponent;

