import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ItemTableComponent from '../components/ItemTable';
import * as incomesActions from '../store/incomes/actions';
import * as incomesSelectors from '../store/incomes/reducer';

import NewIncomeModal from '../components/incomes/NewIncomeModal';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


const IncomesModule = (props) => {

    useEffect( () => {
        props.dispatch(incomesActions.fetchIncomes('2021','10'));
    })
    
    const handleClick = (e) => {
        props.dispatch(incomesActions.openIncomeModal())
    }
    
    return(
        <div className="IncomesModule">
            <h1>
                Ingresos <Button onClick={handleClick} variant="contained" startIcon={<AddIcon />}>Ingreso</Button>
            </h1>
            <ItemTableComponent itemsArray={props.incomesArray} />  
            <NewIncomeModal /> 
        </div>
    );
    
}

function mapStateToProps(state) {
    return {
        incomesArray: incomesSelectors.getIncomes(state),
        income_modal_open: incomesSelectors.isIncomeModalOpen(state)
    };
  }

export default connect(mapStateToProps)(IncomesModule);