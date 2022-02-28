import { useState,useEffect } from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import { AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';
import firebaseUtils from '../utils/FirebaseUtils'

import StatusBadgeComponent from './StatusBadge.js';


const ItemTCTableComponent = (props) => {

    const [items, setItems] = useState(async() => {
        let responseObject = await firebaseUtils.peticionGet(props.year,props.month,props.tipo).then();
        if(responseObject)
            setItems(responseObject)
    });

    useEffect(async()=> {
        let responseObject = await firebaseUtils.peticionGet(props.year,props.month,props.tipo).then();
        if(responseObject)
            setItems(responseObject)
    });

    return(
        <Table hover>
        <thead>
            <tr>
            <th>Tarjeta</th>
            <th>Fecha cierre</th>
            <th>Fecha vencimiento</th>
            <th>Importe</th>
            <th>Estado</th>
            <th>Acciones</th>
            </tr>
        </thead>
            <tbody>
                {Object.keys(items).map(i=>{
                return <tr key={i}>
                    <td>{items[i].motivo}</td>
                    <td>{items[i].fecha_cierre}</td>
                    <td>{items[i].fecha}</td>
                    <td>$ {items[i].total}</td>
                    <td><StatusBadgeComponent estado={items[i].estado}/></td>
                    <td>
                    <ButtonGroup>
                    <button className="btn btn-primary" onClick={()=>props.seleccionarCanal(props.dataItem[i], i, 'Editar',props.tipo)}> <AiFillEdit /></button> {"   "}
                    <button className="btn btn-danger" onClick={()=>props.seleccionarCanal(props.dataItem[i], i, 'Eliminar',props.tipo)}><AiFillCloseCircle/></button>
                    </ButtonGroup>
                    </td>
                </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"><b>Total tarjetas de crédito</b></td>
                    {/* <td colspan="3"><b>$ {props.totales}</b></td> */}
                </tr>
            </tfoot>
        </Table>
    )
}

export default ItemTCTableComponent;
