import React, {useState,useEffect, useContext} from 'react'
import { 
    Col,
    Container,
    Row,
    Button
} from "reactstrap"
import ItemTableComponent from '../ItemTable'
import ItemTCTableComponent from '../ItemTCTable'
import firebaseUtils from '../../utils/FirebaseUtils.js'
import { DateContext } from '../../contexts/Date'
import { SessionContext } from '../../contexts/Session'
import { useNavigate } from 'react-router-dom'

const DataPage = () => {
    

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [CCExpenses, setCCExpenses] = useState([]);

    const { state } = useContext(DateContext);
    const { sessionState } = useContext(SessionContext)
    const navigate = useNavigate();

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

    const navigateToLogin = () => {
        navigate("/login")
    } 

    const navigateToSignup = () => {
        navigate("/signup")
    } 

    
    return (
        <>
            {sessionState.loggedIn && (
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
                    {/* <Row>
                        <h1>Gastos Tarjeta de crédito</h1>
                        <ItemTCTableComponent items={CCExpenses} type="tc"/>
                    </Row> */}
                </Container>
            )}
            {!sessionState.loggedIn && (
                <Row className="text-center mt-5">
                    <Col>
                        <h1 className="mb-4">Bienvenido a la aplicación de gastos</h1>
                        <p className="mb-4">Por favor, inicie sesión o regístrese para acceder a la aplicación.</p>
                        <div className="d-flex justify-content-center">
                        <Button className="mx-3" color="primary" onClick={navigateToLogin}>Iniciar sesión</Button>
                        <Button className="mx-3" color="secondary" onClick={navigateToSignup}>Registrarse</Button>
                        </div>
                    </Col>
                    </Row>
            )}
        </>
    )
}

export default DataPage