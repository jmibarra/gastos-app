import { useContext, useEffect, useState } from "react";
import { DateContext } from "../../contexts/Date";

import { Col,Toast, ToastBody, ToastHeader} from "reactstrap"
import firebaseUtils from "../../utils/FirebaseUtils";

const MonthMetricsComponent = (props) => {

    const { state } = useContext(DateContext);
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [CCExpenses, setCCExpenses] = useState([]);
    
    const getTotalAmount = (incomes) => {

        let totalIncomes = 0;
        Object.keys(incomes).map(i=> {
            totalIncomes += parseInt(incomes[i].total);
        })

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

    return( 
        <>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Ingresos</h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3>$ {totalIncomes}</h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3> Gastos </h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3> $  {regularExpenses}</h3> <br/>
                        <h3> $ {creditCardExpenses} (TC)</h3>
                        <hr></hr>
                        <h3> $ {regularExpenses + creditCardExpenses} </h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Sobrante</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ {totalIncomes - (regularExpenses + creditCardExpenses)} </h3>
                    </ToastBody>
                </Toast>
                <Toast>
                    <ToastHeader>
                        <h3>Ahorros</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ </h3>
                    </ToastBody>
                </Toast>
            </Col>  
        </>
    );
}

export default MonthMetricsComponent;

