import {useState,useEffect} from 'react'
import { Row, Col} from "reactstrap"
import ItemTableComponent from '../ItemTable.js'
import ItemTCTableComponent from '../ItemTCTable.js'
import MonthMetricsComponent from "../MonthMetrics.js"
import firebaseUtils from '../../utils/FirebaseUtils.js'

const DataPage = ({year,month}) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    useEffect(()=> {
        fetchIncomesData(year,month);
    },[incomes,year,month]);

    useEffect(()=> {
        fetchExpensesData(year,month)
    },[incomes,year,month]);
    

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
            <Row className="p-3 bg-dark my-2 rounded">
                <MonthMetricsComponent incomes={incomes} expenses={expenses} year={year} month={month}/>
            </Row>
            <Row>
                <Col xs="6">
                    <h1> Ingresos </h1>
                    <ItemTableComponent items={incomes} year={year} month={month} type="ingresos"/>
                </Col>
                <Col xs="6">
                    <h1> Gastos </h1>
                        <ItemTableComponent items={expenses} year={year} month={month} type="gastos"/>
                </Col>
            </Row>
            <Row> 
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h1> Gastos Tarjeta de crédito</h1>
                    <ItemTCTableComponent tipo="tc" year={year} month={month}/>
                </Col>
            </Row>
        </>
    )
}

export default DataPage