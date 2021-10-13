import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import HeaderModule from './HeaderModule';
import ExpensesModule from './ExpensesModule';
import IncomeModule from './IncomeModule';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
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
                                    <IncomeModule />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <ExpensesModule />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <IncomeModule />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <ExpensesModule />
                                </Item>
                            </Grid>     
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
} 

export default MonthlyViewScreen;