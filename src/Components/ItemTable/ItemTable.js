import React, {useContext, useState} from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import {AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';

import StatusBadgeComponent from '../Common/StatusBadge.js';
import InsertModalComponent from './Modals/InsertModal.js';
import EditModalComponent from './Modals/EditModal.js';
import firebaseUtils from '../../utils/FirebaseUtils.js'
import { DateContext } from '../../contexts/Date.js';

const ItemTableComponent = ({items,type}) => {

    const { state } = useContext(DateContext);

    const [createModalOpen,setCreateModalOpen] = useState(false);
    const [editModalOpen,setEditModalOpen] = useState(false);
    const [formItem,setFormItem] = useState();
    const [formItemId,setFormItemId] = useState();

    const closeModal = () => {
        setCreateModalOpen(false);
        setEditModalOpen(false);
    }

    const deleteItem = (item,id) => {
        firebaseUtils.peticionDelete(item,state.year,state.month,type,id)
    }

    const updateItemModal = (item,id) => {
        setFormItem(item);
        setFormItemId(id);
        setEditModalOpen(true);
    };

    const handleUpdateChange=e=>{
        setFormItem({
            ...formItem,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <Table hover>
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
                    <tr><td colSpan="7"><button type="button" className="btn btn-link btn-sm" onClick={()=>setCreateModalOpen(true)}>Nuevos {type}</button></td></tr>
                </tbody>
            </Table>
             <InsertModalComponent 
                isOpen={createModalOpen} 
                title={"Insertar "+type} 
                tipo={type} 
                year={state.year} 
                month={state.month} 
                closeModal={closeModal} 
            />
            
            <EditModalComponent 
                isOpen={editModalOpen} 
                formItem={formItem} 
                formItemId={formItemId} 
                tipo={type} 
                year={state.year} 
                month={state.month} 
                handleChange={handleUpdateChange}
                closeModal={closeModal} 
            />
        </>
        
    )
}

export default ItemTableComponent;
