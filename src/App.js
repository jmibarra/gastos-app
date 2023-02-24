import { DateProvider } from "./contexts/Date"
import React, { useState } from "react"
import { Container, Row} from "reactstrap"

import NavBarComponent from './Components/Common/Navbar'
import Footer from "./Components/Common/Footer"

import { SessionProvider } from "./contexts/Session"
import MainLayout from "./Components/MainLayout/MainLayout"
import CreditCardModal from "./Components/creditCards/CreditCardModal"

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
            <section style={{ minHeight: "100vh" }}>                                                                                                       
                <DateProvider>
                    <SessionProvider>
                        <div className="App" style={{ paddingBottom: "5rem" }}>
                            <Container fluid={true}>
                                <Row>
                                    <NavBarComponent 
                                        toogleMetrics={toogleMetrics} 
                                        metricsOpen={metricsOpen}
                                        toogleCreditCardModal={toogleCreditCardModal}
                                        style={{ height: "5rem", backgroundColor: "#F8F9FA" }}
                                    />
                                </Row>
                                    <MainLayout metricsOpen={metricsOpen} style={{ paddingTop: "2rem" }}/>
                                <Row style={{ height: "5rem", backgroundColor: "#F8F9FA" }}>
                                    <Footer />
                                </Row>
                            </Container>
                            <CreditCardModal creditCardModalOpen={creditCardModalOpen} toogleCreditCardModal={toogleCreditCardModal} />
                        </div>
                    </SessionProvider>
                </DateProvider>           
            </section>
        </div>
    );
}

export default App;