import React, {useState,useEffect} from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import { AiFillPlusCircle,AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';
import firebaseUtils from '../utils/FirebaseUtils'

import StatusBadgeComponent from './StatusBadge.js';
import InsertModalComponent from './InsertModal';
import EditModalComponent from './EditModal';

const ItemTableComponent = (props) => {

    const [createModalOpen,setCreateModalOpen] = useState(false);
    const [editModalOpen,setEditModalOpen] = useState(false);
    const [formItem,setFormItem] = useState();
    const [formItemId,setFormItemId] = useState();

    const closeModal = () => {
        setCreateModalOpen(false);
        setEditModalOpen(false);
    }

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

    const deleteItem = (item,id) => {
        firebaseUtils.peticionDelete(item,props.year,props.month,props.tipo,id)
    }

    const updateItemModal = (item,id) => {
        setFormItem(item);
        setFormItemId(id);
        setEditModalOpen(true);
    };

    return(
        <div>
            <h1> {props.tipo} <button className="btn btn-success" onClick={()=>setCreateModalOpen(true)}><AiFillPlusCircle/></button> </h1>
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
                    <button className="btn btn-primary" onClick={()=>updateItemModal(items[i],i)}> <AiFillEdit /></button> {"   "}
                    <button className="btn btn-danger" onClick={()=>deleteItem(items[i],i)}><AiFillCloseCircle/></button>
                    </ButtonGroup>
                    </td>
                </tr>
                })}
            </tbody>
            </Table>
            <InsertModalComponent 
                isOpen={createModalOpen} 
                title={"Insertar Ingresos"} 
                tipo={props.tipo} 
                year={props.year} 
                month={props.month} 
                closeModal={closeModal} 
            />
            <EditModalComponent 
                isOpen={editModalOpen} 
                formItem2={formItem} 
                formItemId={formItemId} 
                tipo={props.tipo} 
                year={props.year} 
                month={props.month} 
                closeModal={closeModal} 
            />
        </div>
        
    )
}

export default ItemTableComponent;
