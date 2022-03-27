import {useState,useEffect} from 'react'
import { 
    Col,
    Container,
    Row,
    Button,
    Collapse
} from "reactstrap"
import {AiFillSignal } from 'react-icons/ai';
import ItemTableComponent from '../ItemTable'
import ItemTCTableComponent from '../ItemTCTable'
import MonthMetricsComponent from '../MonthMetrics'
import firebaseUtils from '../../utils/FirebaseUtils.js'

const DataPage = ({year,month}) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [CCExpenses, setCCExpenses] = useState([]);
    const [metricsOpen, setMetricsOpen] = useState(true)

    useEffect(()=> {
        fetchIncomesData(year,month);
    },[incomes,year,month]);

    useEffect(()=> {
        fetchExpensesData(year,month)
    },[expenses,year,month]);

    useEffect(()=> {
        fetchCCExpensesData(year,month)
    },[CCExpenses,year,month]);

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

    async function fetchCCExpensesData(year,month){
        let responseObject = await firebaseUtils.peticionGet(year,month,"tc").then();
        if(responseObject)
            setCCExpenses(responseObject)
    }

    return (
        <>
            <Container>
                <Row  p-3 my-2>
                    <Col md={12}>
                        <Button outline={metricsOpen} onClick={() => setMetricsOpen(!metricsOpen)}><AiFillSignal /> Metricas</Button>
                    </Col>
                </Row>

                <Collapse isOpen={metricsOpen}>
                    <Row className="p-3 bg-dark my-2 rounded">
                        <MonthMetricsComponent incomes={incomes} expenses={expenses} creditcard={CCExpenses} year={year} month={month}/>
                    </Row>
                </Collapse>
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
                    <ItemTCTableComponent items={CCExpenses} year={year} month={month} type="tc"/>
                </Row>
            </Container>
            
        </>
    )
}

export default DataPage