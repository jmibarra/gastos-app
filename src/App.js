import { DateProvider } from "./contexts/Date"
import React, { useState } from "react"
import { Container, Row} from "reactstrap"
import MonthMetricsComponent from './Components/MonthMetrics'

import NavBarComponent from './Components/Common/Navbar'
import Footer from "./Components/Common/Footer"
import DataPage from "./Components/DataPage/DataPage"
import CreditCardForm from "./Components/creditCards/CreditCardForm"

import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LoginComponent from "./Components/Login"
import SignupComponent from "./Components/Signup"
import { SessionProvider } from "./contexts/Session"

function App() {

    const [metricsOpen, setMetricsOpen] = useState(true);
    const [creditCardModalOpen, setcreditCardModalOpen] = useState(false);

    const toogleMetrics = () => {
        setMetricsOpen(!metricsOpen);
    }

    const toogleCreditCardModal = () => {
        setcreditCardModalOpen(!creditCardModalOpen);
    }

    return (
        <div>
            <section>                                                                                                       
                <DateProvider>
                    <SessionProvider>
                    <div className="App">
                        <Container fluid={true}>
                            <Row>
                                <NavBarComponent 
                                    toogleMetrics={toogleMetrics} 
                                    metricsOpen={metricsOpen}
                                    toogleCreditCardModal={toogleCreditCardModal}
                                />
                            </Row>
                            <Router>
                                <Routes>
                                    <Route path="/" element={ //Componentizar esto para que el enrutamiento quede mas prolijo  
                                        <>
                                            <Row>
                                                <MonthMetricsComponent metricsOpen={metricsOpen}/>
                                            </Row>
                                            <Row>
                                                <DataPage/>
                                            </Row>
                                        </>
                                    }/>  
                                    <Route path="/signup" element={<SignupComponent/>}/>
                                    <Route path="/login" element={<LoginComponent/>}/>  
                                </Routes>  
                            </Router>
                            <Row>
                                <Footer />
                            </Row>
                        </Container>
                        <CreditCardForm creditCardModalOpen={creditCardModalOpen} toogleCreditCardModal={toogleCreditCardModal} />
                    </div>
                    </SessionProvider>
                </DateProvider>           
            </section>
        </div>
    );
}

export default App;