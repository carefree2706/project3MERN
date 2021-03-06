import React from 'react'
import {AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

import useStyles from './styles'
import memories from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;



    return (
 <AppBar className={classes.appBar} position="static" color="inherit">
  <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">experience</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.blue} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h5">{user?.result.name}</Typography>
            {/* <Button variant="contained" className={classes.logout} color="#e57373" onClick={logout}>Logout</Button> */}
          </div>
        ):(
          <Button component={Link} to="/auth" variant="contained" color='secondary'>Sign In</Button>

        )}


      </Toolbar>
      </AppBar>
    )
}

export default Navbar;