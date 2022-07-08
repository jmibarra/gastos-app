import { DateProvider } from "./contexts/Date"
import { useState, useEffect } from "react"
import { Container, Row,Collapse} from "reactstrap"
import MonthMetricsComponent from './Components/MonthMetrics'



import NavBarComponent from './Components/Common/Navbar'
import DateUtils from "./utils/DateUtils.js"
import Footer from "./Components/Common/Footer"
import DataPage from "./Components/DataPage/DataPage"
import CreditCardForm from "./Components/creditCards/CreditCardForm"

function App() {

    const [year, setYear] = useState(DateUtils.getCurrentYear());
    const [month, setMonth] = useState(DateUtils.getCurrentMonth);
    const [monthName, setMonthName] = useState('febrero');
    const [metricsOpen, setMetricsOpen] = useState(true);
    const [creditCardModalOpen, setcreditCardModalOpen] = useState(false);

    const handleDateChange = (year,month) => {
        setMonth(month);
        setYear(year);
    }    

    useEffect(()=> {
        setMonthName(DateUtils.getMonthName(month));
    },[month]);

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
                        handleDateChange={handleDateChange} 
                        toogleMetrics={toogleMetrics} 
                        metricsOpen={metricsOpen}
                        toogleCreditCardModal={toogleCreditCardModal}
                    />
                </Row>
                <Row>
                    <Collapse isOpen={metricsOpen}>
                        <Row className="p-3 bg-dark my-2 rounded">
                            <MonthMetricsComponent/>
                        </Row>
                    </Collapse>
                </Row>
                <Row>
                    <DataPage/>
                </Row>
                <Row>
                    <Footer />
                </Row>
                <CreditCardForm creditCardModalOpen={creditCardModalOpen} toogleCreditCardModal={toogleCreditCardModal} />
            </Container>
            
        </div>
        </DateProvider>
    );
}

export default App;