import { useState, useEffect } from "react"
import { Container, Row, Col} from "reactstrap"

import NavBarComponent from './Components/Common/Navbar'
import DateUtils from "./utils/DateUtils.js"
import Footer from "./Components/Common/Footer"
import DataPage from "./Components/DataPage/DataPage"

function App() {

    const [year, setYear] = useState(DateUtils.getCurrentYear());
    const [month, setMonth] = useState(DateUtils.getCurrentMonth);
    const [monthName, setMonthName] = useState('febrero');

    const handleDateChange = (year,month) => {
        setMonth(month);
        setYear(year);
    }    

    useEffect(()=> {
        setMonthName(DateUtils.getMonthName(month));
    },[month]);

    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col><NavBarComponent year={year} month={month} monthName={monthName} handleDateChange={handleDateChange}/></Col>
          </Row>
          <DataPage year={year} month={month}/>
        </Container>
        <Footer />
      </div>
    );
}

export default App;