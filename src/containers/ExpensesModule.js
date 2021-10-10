import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTableComponent from '../components/ItemTable';
import * as expensesActions from '../store/expenses/actions';
import * as expensesSelectors from '../store/expenses/reducer';


class ExpensesModule extends Component {
    componentDidMount() {
        this.props.dispatch(expensesActions.fetchExpenses());
    }

    render(){
        return(
            <div className="ExpensesModule">
                <ItemTableComponent expensesArray={this.props.expensesArray} />   
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      expensesArray: expensesSelectors.getExpenses(state)
    };
  }

export default connect(mapStateToProps)(ExpensesModule);