import { DateProvider } from "./contexts/Date"
import React, { useState } from "react"
import { Container, Row} from "reactstrap"

import { BrowserRouter as Router} from 'react-router-dom';


import NavBarComponent from './Components/Common/Navbar'
import Footer from "./Components/Common/Footer"

import CreditCardForm from "./Components/creditCards/CreditCardForm"


import { SessionProvider } from "./contexts/Session"
import MainLayout from "./Components/MainLayout/MainLayout"

function App() {

    
    const [creditCardModalOpen, setcreditCardModalOpen] = useState(false);
    const [metricsOpen, setMetricsOpen] = useState(true);

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
                                        <MainLayout metricsOpen={metricsOpen}/>
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