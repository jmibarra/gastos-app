import React, { useState,useEffect } from "react"
import { Col,Toast, ToastBody, ToastHeader} from "reactstrap"
import firebaseUtils from '../utils/FirebaseUtils'


    // calcularIngresosTotales = (ingresos) => {

    //     let ingresosTotales = 0;
    //     Object.keys(ingresos).map(i=> {
    //         ingresosTotales += parseInt(ingresos[i].total);
    //     })

    //     this.setState({ingresos_mes: ingresosTotales});

    // };




    // calcularGastosTCTotales = (gastos) => {

    //     let gastosTotales = 0;
    //     Object.keys(gastos).map(i=> {
    //         gastosTotales += parseInt(gastos[i].total);
    //     })

    //     this.setState({gastos_tc_mes: gastosTotales});

    // };

const MonthMetricsComponent = (props) => {

    const [gastosTotales, setGastosTotales] = useState(0);
    const [ingresosTotales, setingresosTotales] = useState(0);
    const [gastosTCTotales, setgastosTCTotales] = useState(0);
    const [ahorrosTotales, setahorrosTotales] = useState(0);

    useEffect(()=> {
        //setGastosTotales(fetchTotalsData(props.year,props.month,"gastos"))
    },[]);

    async function fetchTotalsData(year,month,type){
        let responseObject = await firebaseUtils.peticionGet(year,month,type).then();
        let sumaDeItems = 0
        if(responseObject){
            Object.keys(responseObject).map( i=> {
                sumaDeItems += parseInt(responseObject[i].total)
            })
        }

        return sumaDeItems;
    }

    return(
        <>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Ingresos</h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3>$ {ingresosTotales}</h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3> Gastos </h3>
                    </ToastHeader>
                    <ToastBody>
                        <h3> $  {gastosTotales}</h3> <br/>
                        <h3> $ {gastosTCTotales} (TC)</h3>
                        <hr></hr>
                        <h3> $ {gastosTotales + gastosTCTotales} </h3>
                    </ToastBody>
                </Toast>
            </Col>
            <Col xs="6" sm="4">
                <Toast>
                    <ToastHeader>
                        <h3>Sobrante</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ {ingresosTotales - (gastosTotales + gastosTCTotales)} </h3>
                    </ToastBody>
                </Toast>
                <Toast>
                    <ToastHeader>
                        <h3>Ahorros</h3>
                    </ToastHeader>
                    <ToastBody>
                       <h3> $ {ahorrosTotales}</h3>
                    </ToastBody>
                </Toast>
            </Col>  
        </>
    );
}

export default MonthMetricsComponent;

