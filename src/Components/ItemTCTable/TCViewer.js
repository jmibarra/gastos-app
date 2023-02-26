import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../contexts/Session';
import firebaseUtils from '../../utils/FirebaseUtils';
import TCPopover from './TCPopover';

const TCViewer = ({creditCardId}) => {

    const { sessionState } = useContext(SessionContext)
    const [creditCard, setCreditCard] = useState([]);

    useEffect(()=> {
        fetchCreditCardsData();
    },[]);

    async function fetchCreditCardsData(){
        let responseObject = await firebaseUtils.peticionGet((sessionState.loggedIn ? sessionState.user.uid : "")+"/tc/"+creditCardId); 
        if(responseObject)
            setCreditCard(responseObject)
    }

    return (
        <TCPopover creditCard={creditCard} creditCardId={creditCardId}/>
    )
}

export default TCViewer