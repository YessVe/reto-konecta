import { Avatar, Grid, Paper, TextField, Button, ThemeProvider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { usesStyles } from '../login/login-style';
import { themeGeneral, themeTittle } from '../../style/typography';
import  coWorking  from '../../image/co-working_login.svg';
import LockIcon from '@material-ui/icons/Lock';
import { AccountCircle } from '@material-ui/icons';
import { InputAdornment, FormControl,  } from '@material-ui/core';

import { postLogin } from '../../service/postLogin';
import { useHistory } from 'react-router-dom';
import decode from "jwt-decode";




const Login = () => {
    const history = useHistory();

    
    const [body, setBody] = useState({user:'', password:''})
    const classes= usesStyles();

    const handleChange = (e) =>{
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const submitLogin = () => {

        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();

        postLogin(body.user, body.password)
     
        .then(res => {

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('key', body.user)
        const decoded = decode(res.data.token);
        console.log(decoded)
        // revisar mañana 
            if (decoded) {
            history.push("/manager")
            }
        })        
    }

    return (
        <Grid className={classes.mainView}>

            <img className={classes.imgStyle} src={coWorking} alt='co-working'/>

            <Paper elevation={5} className={classes.paperView}>

                <Grid align='center' >
                    <Avatar style={{background:'white', width:'30%', height:'50%'}}> <i className="fas fa-graduation-cap" style={{width:'80%', height:'80%', color:'purple'}} ></i> </Avatar>
                    
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
                            name='user'
                            value={body.user}
                            onChange={handleChange}
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
                            name='password'
                            value={body.pasword}
                            onChange={handleChange}
                        />
                    </FormControl>

                </Grid>

                <Grid align='center' >
                    <Button 
                        variant="contained" 
                        className={classes.buttonPink} 
                        onClick={()=>submitLogin()}
                    >Iniciar Sesión</Button>
                </Grid>

            </Paper>
        </Grid>    
    )
}

export default Login;