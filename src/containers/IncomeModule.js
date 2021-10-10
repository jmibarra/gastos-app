import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTableComponent from '../components/ItemTable';
import * as incomesActions from '../store/incomes/actions';
import * as incomesSelectors from '../store/incomes/reducer';


class IncomesModule extends Component {
    componentDidMount() {
        this.props.dispatch(incomesActions.fetchIncomes());
    }

    render(){
        return(
            <div className="IncomesModule">
                <h1>Ingresos</h1>
                <ItemTableComponent expensesArray={this.props.incomesArray} />   
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        incomesArray: incomesSelectors.getIncomes(state)
    };
  }

export default connect(mapStateToProps)(IncomesModule);