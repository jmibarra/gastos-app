import React, { useState, useEffect } from "react"
import { Container, Row, Col} from "reactstrap"

import NavBarComponent from './Componentes/Navbar.js'
import ItemTableComponent from './Componentes/ItemTable.js'
import ItemTCTableComponent from './Componentes/ItemTCTable.js'
import DateUtils from "./utils/DateUtils.js"
import MonthMetricsComponent from "./Componentes/MonthMetrics.js"

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
          <Row className="p-3 bg-dark my-2 rounded">
             <MonthMetricsComponent year={year} month={month}/>
          </Row>
          <Row>
            <Col xs="6">
                <h1> Ingresos </h1>
                <ItemTableComponent tipo="ingresos" year={year} month={month}/>
            </Col>
            <Col xs="6">
                <h1> Gastos </h1>
                <ItemTableComponent tipo="gastos" year={year} month={month}/>
            </Col>
          </Row>
          <Row> 
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1> Gastos Tarjeta de crédito</h1>
                <ItemTCTableComponent tipo="tc" year={year} month={month}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default App;