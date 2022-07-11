import { DateProvider } from "./contexts/Date"
import { useState } from "react"
import { Container, Row} from "reactstrap"
import MonthMetricsComponent from './Components/MonthMetrics'

import NavBarComponent from './Components/Common/Navbar'
import Footer from "./Components/Common/Footer"
import DataPage from "./Components/DataPage/DataPage"
import CreditCardForm from "./Components/creditCards/CreditCardForm"

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
    );
}

export default App;