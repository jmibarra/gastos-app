import { useState,useEffect } from 'react';
import { Table,ButtonGroup } from 'reactstrap';
import { AiFillEdit,AiFillCloseCircle } from 'react-icons/ai';
import firebaseUtils from '../utils/FirebaseUtils'

import StatusBadgeComponent from './StatusBadge.js';
import InsertModalComponent from './InsertModal';
import EditModalComponent from './EditModal';

const ItemTCTableComponent = (props) => {

    const [createModalOpen,setCreateModalOpen] = useState(false);
    const [editModalOpen,setEditModalOpen] = useState(false);
    const [formItem,setFormItem] = useState();
    const [formItemId,setFormItemId] = useState();

    const closeModal = () => {
        setCreateModalOpen(false);
        setEditModalOpen(false);
    }

    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetchData(props.year,props.month,props.tipo)
    },[items,props]);

    async function fetchData(year,month,type){
        let responseObject = await firebaseUtils.peticionGet(year,month,type).then();
        if(responseObject)
            setItems(responseObject)
    }

    const deleteItem = (item,id) => {
        firebaseUtils.peticionDelete(item,props.year,props.month,props.tipo,id)
    }

    const updateItemModal = (item,id) => {
        setFormItem(item);
        setFormItemId(id);
        setEditModalOpen(true);
    };

    return(
        <>
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
                                <button className="btn btn-primary" onClick={()=>updateItemModal(items[i],i)}> <AiFillEdit /></button> {"   "}
                                <button className="btn btn-danger" onClick={()=>deleteItem(items[i],i)}><AiFillCloseCircle/></button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    })}
                    <tr><td colSpan="7"><button type="button" className="btn btn-link btn-sm" onClick={()=>setCreateModalOpen(true)}>Nueva tarjeta de credito</button></td></tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><b>Total tarjetas de crédito:</b></td>
                        <td>$180</td>
                    </tr>
                </tfoot>
            </Table>
            <InsertModalComponent 
                isOpen={createModalOpen} 
                title={"Insertar gasto de TC"} 
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
        </>
    )
}

export default ItemTCTableComponent;
