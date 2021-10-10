import React, { Component } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'motivo', headerName: 'Motivo' },
    { field: 'fecha', headerName: 'Fecha' },
    { field: 'total', headerName: 'Total' },
    { field: 'estado', headerName: 'Estado' }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const ItemTableComponent = (props) => {
    return(
        <div className="ExpensesModule">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Motivo</StyledTableCell>
                            <StyledTableCell align="right">Fecha</StyledTableCell>
                            <StyledTableCell align="right">Total</StyledTableCell>
                            <StyledTableCell align="right">Estado</StyledTableCell>
                            <StyledTableCell align="right">Acción</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.expensesArray.map((row) => (
                            <StyledTableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <StyledTableCell component="th" scope="row">
                                    {row.motivo}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                                <StyledTableCell align="right">{row.total}</StyledTableCell>
                                <StyledTableCell align="right">{row.estado}</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>     
        </div>
    );
}

export default ItemTableComponent;