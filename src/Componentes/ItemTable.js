import React from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import { AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';


import StatusBadgeComponent from './StatusBadge.js';

const ItemTableComponent = (props) => {

  return(
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
        {Object.keys(props.dataItem).map(i=>{
          return <tr key={i}>
            <td>{props.dataItem[i].motivo}</td>
            <td>{props.dataItem[i].fecha}</td>
            <td>{props.dataItem[i].total}</td>
            <td><StatusBadgeComponent estado={props.dataItem[i].estado}/></td>
            <td>
            <ButtonGroup>
              <button className="btn btn-primary" onClick={()=>props.seleccionarCanal(props.dataItem[i], i, 'Editar',props.tipo)}> <AiFillEdit /></button> {"   "}
              <button className="btn btn-danger" onClick={()=>props.seleccionarCanal(props.dataItem[i], i, 'Eliminar',props.tipo)}><AiFillCloseCircle/></button>
            </ButtonGroup>
            </td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}

export default ItemTableComponent;
