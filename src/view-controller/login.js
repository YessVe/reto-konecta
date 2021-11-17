import { Avatar, Grid, Paper, TextField, Button, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { usesStyles } from '../style/login';
import { themeGeneral, themeTittle } from '../style/typography';
import  coWorking  from '../image/co-working_login.svg';
import LockIcon from '@material-ui/icons/Lock';
import { AccountCircle } from '@material-ui/icons';
import { InputAdornment, FormControl,  } from '@material-ui/core';

const login = ()=>{
    
    const classes= usesStyles();

    return (
        <Grid className={classes.mainView}>

            <img className={classes.imgStyle} src={coWorking} alt='co-working'/>

            <Paper elevation={5} className={classes.paperView}>

                <Grid align='center' >
                    <Avatar style={{background:'white', width:'30%', height:'50%'}}> <i class="fas fa-graduation-cap" style={{width:'80%', height:'80%', color:'purple'}} ></i> </Avatar>
                    
                    <ThemeProvider theme={themeTittle}>
                        <Typography variant="h2" gutterBottom>APRENDE</Typography>
                    </ThemeProvider>
                    
                    <ThemeProvider theme={themeGeneral}>
                        <h3>Iniciar sesión</h3>
                    </ThemeProvider>
                </Grid>

                <Grid align='center' >

                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Usuario"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                            placeholder='Introduce tu usuario'
                            required
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Contraseña"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                            placeholder='Introduce tu contraseña'
                            type='password'
                            required
                        />
                    </FormControl>

                </Grid>

                <Grid align='center' >
                    <Button variant="contained" className={classes.buttonPink} >Iniciar Sesión</Button>
                </Grid>

            </Paper>
        </Grid>    
    )
}

export default login;