import React from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Grid from '@mui/material/Grid';

const IncomesForm = (props) => {

    const formItem = {
        motivo: '',
        fecha: '',
        total: '',
        estado: 'Estimado'
    }

    return (
        <div>
            <Box component="form"
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="motivo-data-input">Motivo</InputLabel>
                                <OutlinedInput
                                    id="motivo-data-input"
                                    label="Motivo"                        
                                />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1 }}>
                            <TextField
                                id="date"
                                label="Fecha"
                                type="date"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl  sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Total</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formItem.estado}
                                label="Estado"
                            >
                                <MenuItem value={"Estimado"}>Estimado</MenuItem>
                                <MenuItem value={"Pendiente"}>Pendiente</MenuItem>
                                <MenuItem value={"Pago"}>Pago</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(IncomesForm);