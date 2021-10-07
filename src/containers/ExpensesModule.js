import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../store/expenses/actions';
import * as expensesSelectors from '../store/expenses/reducer';

import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

class ExpensesModule extends Component {
    componentDidMount() {
        this.props.dispatch(expensesActions.fetchExpenses());
    }

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 5,
        maxColumns: 6,
    });

    render(){
        return(
            <div className="ExpensesModule">
                
            {Object.keys(this.props.expensesArray).map(index =>
               this.props.expensesArray[index].motivo
            )}
                    
            </div>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
      expensesArray: expensesSelectors.getExpenses(state)
    };
  }

export default connect(mapStateToProps)(ExpensesModule);