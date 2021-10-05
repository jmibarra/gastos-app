import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../store/expenses/actions';
import * as expensesSelectors from '../store/expenses/reducer';

class ExpensesModule extends Component {
    componentDidMount() {
        this.props.dispatch(expensesActions.fetchExpenses());
    }

    render(){
        console.log(this.props.expensesArray)
        return(
            <div className="ExpensesModule">
                {this.props.expensesArray}
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