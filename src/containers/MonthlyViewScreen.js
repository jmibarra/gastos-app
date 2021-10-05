import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as expensesActions from '../store/expenses/actions';
import * as expensesSelectors from '../store/expenses/reducer';
import ExpensesModule from './ExpensesModule';
import HeaderModule from './HeaderModule';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class MonthlyViewScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xlg">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Item>
                                    <HeaderModule />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <ExpensesModule />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                            <Item>Tabla gastos</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        )
      }
} 

function mapStateToProps(state) {
    return {
        expenses: expensesSelectors.getExpenses(state),
    };
  }

export default connect(mapStateToProps)(MonthlyViewScreen);