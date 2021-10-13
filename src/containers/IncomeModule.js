import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTableComponent from '../components/ItemTable';
import * as incomesActions from '../store/incomes/actions';
import * as incomesSelectors from '../store/incomes/reducer';

import NewIncomeModal from '../components/incomes/NewIncomeModal';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


class IncomesModule extends Component {
    componentDidMount() {
        this.props.dispatch(incomesActions.fetchIncomes());
    }

    handleClick = (e) => {
        this.props.dispatch(incomesActions.openIncomeModal())
    }
    
    render(){
        return(
            <div className="IncomesModule">
                <h1>
                    Ingresos <Button onClick={this.handleClick} variant="contained" startIcon={<AddIcon />}>Ingreso</Button>
                </h1>
                <ItemTableComponent itemsArray={this.props.incomesArray} />  
                <NewIncomeModal /> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        incomesArray: incomesSelectors.getIncomes(state),
        income_modal_open: incomesSelectors.isIncomeModalOpen(state)
    };
  }

export default connect(mapStateToProps)(IncomesModule);