import React from 'react';
import { connect } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import IncomesForm from './IncomesForm';

import * as incomeSelector from '../../store/incomes/reducer';
import * as incomeActions from '../../store/incomes/actions';

const NewIncomeModal = (props) => {
      
    const handleClose = () => {
        props.dispatch(incomeActions.closeIncomeModal());
    };

    const handleCancel = () => {
        props.dispatch(incomeActions.closeIncomeModal());
    };

    return (
        <div>
            <Dialog
            open={props.income_modal_open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle>{"Nuevo Ingreso"}</DialogTitle>
            <DialogContent>
                <IncomesForm/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancelar</Button>
                <Button variant="contained" color="success" onClick={handleClose}>Crear</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        income_modal_open: incomeSelector.isIncomeModalOpen(state)
    };
}

export default connect(mapStateToProps)(NewIncomeModal);