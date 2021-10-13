import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import * as incomeSelector from '../store/incomes/reducer';
import * as incomeActions from '../store/incomes/actions';

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
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="motivo-data-input">Motivo</InputLabel>
                        <OutlinedInput
                            id="motivo-data-input"
                            label="Motivo"                        
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Total</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                        />
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancelar</Button>
                <Button onClick={handleClose}>Crear</Button>
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