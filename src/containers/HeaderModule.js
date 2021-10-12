import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dateActions from '../store/dates/actions';
import * as dateSelectors from '../store/dates/reducer';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class HeaderModule extends Component {
    
    componentDidMount() {
        this.props.dispatch(dateActions.calculateDate());
    }

    handleChangeYear = (event) => {
        this.props.dispatch(dateActions.updateDate(event.target.value,this.props.month));
    };

    handleChangeMonth = (event) => {
        this.props.dispatch(dateActions.updateDate(this.props.year,event.target.value));
    };

    handleDateToday = (event) => {
        this.props.dispatch(dateActions.calculateDate());
    };
  
    handleClickOpen = () => {
        this.props.dispatch(dateActions.openDateDialog());
    };
  
    handleClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        this.props.dispatch(dateActions.closeDateDialog());
      }
    };

    render(){
        return(
            <div className="HeaderModule">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={this.handleClickOpen}>
                                Gastos {this.props.month_name} {this.props.year}  
                            </Typography>
                        </Toolbar>
                    </AppBar>
                        <Dialog disableEscapeKeyDown open={this.props.date_selector_open} onClose={this.handleClose}>
                            <DialogTitle>Seleccionar mes y año</DialogTitle>
                            <DialogContent>
                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-dialog-select-label">Mes</InputLabel>
                                        <Select
                                            labelId="month-select-label"
                                            id="demo-dialog-select"
                                            value={this.props.month}
                                            onChange={this.handleChangeMonth}
                                            input={<OutlinedInput label="Month" />}
                                        >
                                            <MenuItem value={1}>Enero</MenuItem>
                                            <MenuItem value={2}>Febrero</MenuItem>
                                            <MenuItem value={3}>Marzo</MenuItem>
                                            <MenuItem value={4}>Abril</MenuItem>
                                            <MenuItem value={5}>Mayo</MenuItem>
                                            <MenuItem value={6}>Junio</MenuItem>
                                            <MenuItem value={7}>Julio</MenuItem>
                                            <MenuItem value={8}>Agosto</MenuItem>
                                            <MenuItem value={9}>Septiembre</MenuItem>
                                            <MenuItem value={10}>Octubre</MenuItem>
                                            <MenuItem value={11}>Noviembre</MenuItem>
                                            <MenuItem value={12}>Diciembre</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-dialog-select-label">Año</InputLabel>
                                        <Select
                                            labelId="year-select-label"
                                            id="demo-dialog-select"
                                            value={this.props.year}
                                            onChange={this.handleChangeYear}
                                            input={<OutlinedInput label="Yeas" />}
                                        >
                                            <MenuItem value={2020}>{2020}</MenuItem>
                                            <MenuItem value={2021}>{2021}</MenuItem>
                                            <MenuItem value={2022}>{2022}</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ mt: 2, minWidth: 50 }}>
                                        <Button onClick={this.handleDateToday}>Today</Button>
                                    </FormControl>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                </Box>                
            </div>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
      year: dateSelectors.getYear(state),
      month: dateSelectors.getMonth(state),
      month_name: dateSelectors.getMonthName(state),
      date_selector_open: dateSelectors.isSelectorDateOpen(state)
    };
  }

export default connect(mapStateToProps)(HeaderModule);