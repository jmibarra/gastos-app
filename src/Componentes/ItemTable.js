import React, {useState, useEffect} from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import { AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';
import firebaseService from '../services/firebaseService';

import StatusBadgeComponent from './StatusBadge.js';
import InsertModalComponent from '../Componentes/InsertModal';

const ItemTableComponent = (props) => {

    const [items, setItems] = useState(async() => {
        let responseObject = await firebaseService.peticionGet('2022','02',props.tipo).then();
        if(responseObject)
            setItems(responseObject)
    });

    return(
        <div>
            <Table>
            <thead>
                <tr>
                <th>Motivo</th>
                <th>Fecha</th>
                <th>Importe</th>
                <th>Estado</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(items).map(i=>{
                return <tr key={i}>
                    <td>{items[i].motivo}</td>
                    <td>{items[i].fecha}</td>
                    <td>$ {items[i].total}</td>
                    <td><StatusBadgeComponent estado={items[i].estado}/></td>
                    <td>
                    <ButtonGroup>
                    <button className="btn btn-primary" onClick={()=>props.seleccionarCanal(items[i], i, 'Editar',props.tipo)}> <AiFillEdit /></button> {"   "}
                    <button className="btn btn-danger" onClick={()=>props.seleccionarCanal(items[i], i, 'Eliminar',props.tipo)}><AiFillCloseCircle/></button>
                    </ButtonGroup>
                    </td>
                </tr>
                })}
            </tbody>
            </Table>
            {/* <InsertModalComponent isOpen={false} title={"Insertar Ingresos"} tipo={props.tipo} handleChange={this.handleChange} closeModal={this.closeModal} /> */}
        </div>
        
    )
}

export default ItemTableComponent;
