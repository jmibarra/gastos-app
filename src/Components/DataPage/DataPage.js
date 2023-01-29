import React, {useState,useEffect, useContext} from 'react'
import { 
    Col,
    Container,
    Row,
} from "reactstrap"
import ItemTableComponent from '../ItemTable'
import ItemTCTableComponent from '../ItemTCTable'
import firebaseUtils from '../../utils/FirebaseUtils.js'
import { DateContext } from '../../contexts/Date'

const DataPage = () => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [CCExpenses, setCCExpenses] = useState([]);

    const { state } = useContext(DateContext);

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
        const responseObject = await firebaseUtils.peticionGet(year,month,"ingresos");
        if(responseObject)
            setIncomes(responseObject)
    }

    async function fetchExpensesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"gastos");
        if(responseObject)
            setExpenses(responseObject)
    }

    async function fetchCCExpensesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"tc");
        if(responseObject)
            setCCExpenses(responseObject)
    }

    return (
        <>
            <Container>
                <Row xs="2"> 
                    <Col>
                        <h1>Ingresos</h1>
                        <ItemTableComponent items={incomes} type="ingresos"/>
                    </Col>
                    <Col>
                        <h1>Gastos</h1>
                        <ItemTableComponent items={expenses} type="gastos"/>
                    </Col>          
                </Row>
                <Row>
                    <h1>Gastos Tarjeta de crédito</h1>
                    <ItemTCTableComponent items={CCExpenses} type="tc"/>
                </Row>
            </Container>
            
        </>
    )
}

export default DataPage