import React, { useContext } from 'react'

import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route,Navigate} from 'react-router-dom';

import LoginComponent from "../Login"
import SignupComponent from "../Signup"
import MonthMetricsComponent from '../MonthMetrics'
import DataPage from "../DataPage/DataPage"

import { SessionContext } from '../../contexts/Session';

import { Row} from "reactstrap"

const MainLayout = (props) => {

    const { sessionState} = useContext(SessionContext)        

    return (
        <Router>
            <Routes>
                <Route path="/" element={ sessionState.loggedIn ? (
                    <>
                        <Row>
                            <MonthMetricsComponent metricsOpen={props.metricsOpen}/>
                        </Row>
                        <Row>
                            <DataPage/>
                        </Row>
                    </>
                    ) : <Navigate replace to={"/login"} />
                }/>  
                <Route path="/signup" element={<SignupComponent/>}/>
                <Route path="/login" element={<LoginComponent/>}/>  
            </Routes>  
        </Router>
  )
}

export default MainLayout