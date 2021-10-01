import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../store/expenses/actions';
import * as expensesSelectors from '../store/expenses/reducer';

class MonthlyViewScreen extends Component {
    render() {
        return (
        <h1>Test nuevo container</h1>
        )
      }
} 

function mapStateToProps(state) {
    return {
        expenses: expensesSelectors.getExpensesByMonth(state),
    };
  }

export default connect(mapStateToProps)(MonthlyViewScreen);