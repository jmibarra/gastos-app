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
        <Router>
            <div>
                <section>                              
                    <Routes>                                                                        
                        <Route path="/" element={ //Componentizar esto para que el enrutamiento quede mas prolijo
                            <DateProvider>
                            <div className="App">
                                <Container fluid={true}>
                                    <Row>
                                        <NavBarComponent 
                                            toogleMetrics={toogleMetrics} 
                                            metricsOpen={metricsOpen}
                                            toogleCreditCardModal={toogleCreditCardModal}
                                        />
                                    </Row>
                                    <Row>
                                        <MonthMetricsComponent metricsOpen={metricsOpen}/>
                                    </Row>
                                    <Row>
                                        <DataPage/>
                                    </Row>
                                    <Row>
                                        <Footer />
                                    </Row>
                                </Container>
                                <CreditCardForm creditCardModalOpen={creditCardModalOpen} toogleCreditCardModal={toogleCreditCardModal} />
                            </div>
                            </DateProvider>
                        }/>
                        <Route path="/signup" element={<h1>Signup</h1>}/>
                        <Route path="/login" element={<LoginComponent/>}/>  
                    </Routes>                  
                </section>
            </div>
        </Router>
    );
}

export default App;