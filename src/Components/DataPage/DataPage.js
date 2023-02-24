import React, {useState,useEffect, useContext} from 'react'
import { 
    Col,
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardTitle
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
        let responseObject = await firebaseUtils.peticionGet(year,month,"tc_gasto",sessionState.loggedIn ? sessionState.user.uid : "");
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
                <Container style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">Ingresos</CardTitle>
                            <ItemTableComponent items={incomes} type="ingresos"/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">Gastos</CardTitle>
                            <ItemTableComponent items={expenses} type="gastos"/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">Gastos Tarjeta de crédito</CardTitle>
                            <ItemTCTableComponent items={CCExpenses} type="tc_gasto"/>
                        </CardBody>
                    </Card>                 
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