import {useState,useEffect} from 'react'
import { 
    Col,
    Container,
    Row,
} from "reactstrap"
import ItemTableComponent from '../ItemTable'
import ItemTCTableComponent from '../ItemTCTable'
import MonthMetricsComponent from '../MonthMetrics'
import firebaseUtils from '../../utils/FirebaseUtils.js'

const DataPage = ({year,month}) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    useEffect(()=> {
        fetchIncomesData(year,month);
    },[incomes,year,month]);

    useEffect(()=> {
        fetchExpensesData(year,month)
    },[expenses,year,month]);
    

    async function fetchIncomesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"ingresos").then();
        if(responseObject)
            setIncomes(responseObject)
    }

    async function fetchExpensesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"gastos").then();
        if(responseObject)
            setExpenses(responseObject)
    }

    return (
        <>
            <Container>
            <Row className="p-3 bg-dark my-2 rounded">
                <MonthMetricsComponent incomes={incomes} expenses={expenses} year={year} month={month}/>
            </Row>
            <Row xs="2"> 
                <Col>
                    <h1>Ingresos</h1>
                    <ItemTableComponent items={incomes} year={year} month={month} type="ingresos"/>
                </Col>
                <Col>
                    <h1>Gastos</h1>
                    <ItemTableComponent items={expenses} year={year} month={month} type="gastos"/>
                </Col>          
            </Row>
            <Row>
                <h1>Gastos Tarjeta de crédito</h1>
                <ItemTCTableComponent tipo="tc" year={year} month={month}/>
            </Row>
            </Container>
            
        </>
    )
}

export default DataPage