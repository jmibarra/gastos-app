import React, { Component } from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';

const ActionsSpeedDial = (props) => {

    const handleIncome = () => alert("hola Ingreso");
    const handleExpense = () => alert("hola Expense");
    const handleExpenseTC = () => alert("hola Expense con TC");

    const actions = [
        { icon: <AddCircleOutlineIcon />, name: 'Ingreso', action: handleIncome },
        { icon: <RemoveIcon />, name: 'Gasto', action: handleExpense },
        { icon: <CreditCardIcon />, name: 'Gasto tarjeta de crédito', action: handleExpenseTC }
    ];

    return(
        <SpeedDial 
            ariaLabel="Ingresar item" 
            sx={{ position: 'absolute', bottom: 16, right: 16 }} 
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.action}
                />
            ))}
        </SpeedDial>

    );
}
    
export default ActionsSpeedDial;