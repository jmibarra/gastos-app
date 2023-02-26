import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../contexts/Session';
import firebaseUtils from '../../utils/FirebaseUtils';

const TCViewer = ({creditCardId}) => {

    const { sessionState } = useContext(SessionContext)
    const [creditCard, setCreditCard] = useState([]);

    useEffect(()=> {
        fetchCreditCardsData();
    },[]);

    async function fetchCreditCardsData(){
        let responseObject = await firebaseUtils.peticionGet((sessionState.loggedIn ? sessionState.user.uid : "")+"/tc/"+creditCardId); 
        // {orderBy: "status",equalTo: 'Activa'}
        if(responseObject)
            setCreditCard(responseObject)
    }

    return (
        <div>{creditCard.alias}</div>
       
    )
}

export default TCViewer