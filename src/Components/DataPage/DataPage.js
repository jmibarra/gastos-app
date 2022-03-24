import {useState,useEffect} from 'react'
import { 
    Row, 
    UncontrolledAccordion,
    AccordionHeader,
    AccordionItem
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
            <Row className="p-3 bg-dark my-2 rounded">
                <MonthMetricsComponent incomes={incomes} expenses={expenses} year={year} month={month}/>
            </Row>
            <Row> 
                <UncontrolledAccordion
                    defaultOpen={[
                    '1',
                    '2'
                    ]}
                    stayOpen
                >
                    <AccordionItem>
                        <AccordionHeader targetId="1">
                            <h1>Ingresos</h1>
                        </AccordionHeader>
                        <AccordionItem accordionId="1">
                            <div><ItemTableComponent items={incomes} year={year} month={month} type="ingresos"/></div>  
                        </AccordionItem>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">
                            <h1>Gastos</h1>
                        </AccordionHeader>
                        <AccordionItem accordionId="2">
                            <ItemTableComponent items={expenses} year={year} month={month} type="gastos"/>
                        </AccordionItem>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">
                            <h1>Gastos Tarjeta de crédito</h1>
                        </AccordionHeader>
                        <AccordionItem accordionId="3">
                            <ItemTCTableComponent tipo="tc" year={year} month={month}/>
                        </AccordionItem>
                    </AccordionItem>
                </UncontrolledAccordion>
            </Row>
        </>
    )
}

export default DataPage