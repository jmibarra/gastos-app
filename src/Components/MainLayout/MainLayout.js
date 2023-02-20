import React, { useContext, useEffect } from 'react'

import {Routes, Route} from 'react-router-dom';

import LoginComponent from "../Login"
import SignupComponent from "../Signup"
import MonthMetricsComponent from '../MonthMetrics'
import DataPage from "../DataPage/DataPage"

import { SessionContext } from '../../contexts/Session';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Row} from "reactstrap"
import NotFoundPage from '../Common/NotFoundPage';

const MainLayout = (props) => {

    const {login} = useContext(SessionContext)   
    const auth = getAuth();
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              login(user);
            } else {
              // User is signed out
              console.log("user is logged out")
              //navigate("/login")
            }
          });
         
    }, [])

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Row>
                        <MonthMetricsComponent metricsOpen={props.metricsOpen}/>
                    </Row>
                    <Row>
                        <DataPage/>
                    </Row>
                </>
            }/>  
            <Route path="/signup" element={<SignupComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/> 
            <Route path='*' element={<NotFoundPage />}/> 
        </Routes>  
    )
}

export default MainLayout