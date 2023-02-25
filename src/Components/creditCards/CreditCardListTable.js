import React, { useContext } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { ButtonGroup, Table } from 'reactstrap'
import { SessionContext } from '../../contexts/Session'
import firebaseUtils from '../../utils/FirebaseUtils'

const CreditCardListTable = ({creditCards}) => {


    const { sessionState } = useContext(SessionContext)

    const deleteItem = (item,id) => {
        // Solicita la confirmación del usuario para eliminar el elemento
        if(
            window.confirm(
                `Estás seguro que deseas eliminar el elemento ${
                    item && item.alias
                }?`
            )
        ){
            firebaseUtils.peticionDelete((sessionState.loggedIn ? sessionState.user.uid : "")+"/tc/"+id)
        }
    }
  
    return (
    <>
        <Table hover>
            <thead>
                <tr>
                    <th>Alias</th>
                    <th>Número</th>
                    <th>Vencimiento</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(creditCards).map(i=>{
                    return <tr key={i}>
                        <td>{creditCards[i].alias}</td>
                        <td>{creditCards[i].number}</td>
                        <td>{creditCards[i].expiry}/{creditCards[i].expiryyear}</td>
                        <td>{creditCards[i].status}</td>
                        <td>
                            <ButtonGroup>
                                <button className="btn btn-primary" > <AiFillEdit /></button>  
                                {/* onClick={()=>updateItemModal(items[i],i)}   */}
                                <button className="btn btn-danger" onClick={()=>deleteItem(creditCards[i],i)}><AiFillCloseCircle/></button>
                            </ButtonGroup>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    </>
    )
}

export default CreditCardListTable