import { useState } from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import { AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';
import firebaseUtils from '../../utils/FirebaseUtils'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

import StatusBadgeComponent from '../Common/StatusBadge.js';
import InsertTCModalComponent from './Modals/InsertTCModal';
import EditTCModalComponent from './Modals/EditTCModal';

const ItemTCTableComponent = ({items,year,month,type}) => {

    const [createModalOpen,setCreateModalOpen] = useState(false);
    const [editModalOpen,setEditModalOpen] = useState(false);
    const [formItem,setFormItem] = useState();
    const [formItemId,setFormItemId] = useState();

    const closeModal = () => {
        setCreateModalOpen(false);
        setEditModalOpen(false);
    }

    const deleteItem = (item,id) => {
        firebaseUtils.peticionDelete(item,year,month,type,id)
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
                        <th>icono</th>
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
                        <td>
                            <Cards
                                expiry="08/23"
                                name="Juan Manuel Ibarra"
                                number="5323843298672405"
                            />
                        </td>
                        <td>{items[i].motivo}</td>
                        <td>{items[i].fecha_cierre}</td>
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
                    <tr><td colSpan="7"><button type="button" className="btn btn-link btn-sm" onClick={()=>setCreateModalOpen(true)}>Nueva tarjeta de credito</button></td></tr>
                </tbody>
            </Table>
            
            <InsertTCModalComponent 
                isOpen={createModalOpen} 
                title={"Insertar gasto de TC"} 
                tipo={type} 
                year={year} 
                month={month} 
                closeModal={closeModal} 
            />
            <EditTCModalComponent 
                isOpen={editModalOpen} 
                formItem={formItem} 
                formItemId={formItemId} 
                tipo={type} 
                year={year} 
                month={month} 
                handleChange={handleUpdateChange}
                closeModal={closeModal} 
            />
        </>
    )
}

export default ItemTCTableComponent;
