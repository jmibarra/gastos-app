import { useState, useEffect } from "react"
import { Container, Row, Col} from "reactstrap"

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
        <div className="App">
            <Container fluid={true}>
                <Row>
                    <Col>
                        <NavBarComponent 
                            year={year} 
                            month={month} 
                            monthName={monthName} 
                            handleDateChange={handleDateChange} 
                            toogleMetrics={toogleMetrics} 
                            metricsOpen={metricsOpen}
                            toogleCreditCardModal={toogleCreditCardModal}
                        />
                    </Col>
                </Row>
                <DataPage 
                    year={year} 
                    month={month} 
                    metricsOpen={metricsOpen}
                />
                <CreditCardForm creditCardModalOpen={creditCardModalOpen} toogleCreditCardModal={toogleCreditCardModal} />
            </Container>
            <Footer />
        </div>
    );
}

export default App;