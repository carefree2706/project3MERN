import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import lockOutlinedIcon from  '@material-ui/icons/LockOpenOutlined';

import useStyles from './styles';


const Auth = () => {

    const classes = useStyles();

    const isSignup = false;
    
    const handleSubmit = () => {

    }

    const handleChange = () => {


    }

    return (
       <Container component="main" maxWidth="xs">
           <Paper className={classes.paper} elevation={3}>
               <Avatar className ={ classes.avatar}>
                   <lockOutlinedIcon />
                   <Typography variant="h4">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                   <form className = {classes.form} onSubmit={handleSubmit}></form>
                   <Grid container spacing={2}>
                       {
                           isSignup && (
                               <>
                               <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                               <TextField name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6}/>
                               </>
                           )
                       }

                   </Grid>
               </Avatar>

           </Paper>

       </Container>
    )
}

export default Auth

// && initial when showsomething