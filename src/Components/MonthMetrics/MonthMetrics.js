import { Col,Toast, ToastBody, ToastHeader} from "reactstrap"

const MonthMetricsComponent = (props) => {
    
    const getTotalAmount = (incomes) => {

        let totalIncomes = 0;
        Object.keys(incomes).map(i=> {
            totalIncomes += parseInt(incomes[i].total);
        })

        return totalIncomes;

    };

    const totalIncomes = getTotalAmount(props.incomes);
    const regularExpenses = getTotalAmount(props.expenses);

    return( 
        <>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Ingresos</h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3>$ {totalIncomes}</h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3> Gastos </h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3> $  {regularExpenses}</h3> <br/>
                        <h3> $ {/*gastosTCTotales*/} (TC)</h3>
                        <hr></hr>
                        <h3> $ {regularExpenses /*+ gastosTCTotales*/} </h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Sobrante</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ {totalIncomes - (regularExpenses /*+ gastosTCTotales*/)} </h3>
                    </ToastBody>
                </Toast>
                <Toast>
                    <ToastHeader>
                        <h3>Ahorros</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ </h3>
                    </ToastBody>
                </Toast>
            </Col>  
        </>
    );
}

export default MonthMetricsComponent;

