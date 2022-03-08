import React from "react";
import{AppBar,Toolbar, Typography,Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    
   
    large: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },

    Typographystyle:{
        display:'flex',
       
        flex:'2'
    }
  }));
const Navbar=()=>{
    const classes = useStyles();
    return(<>
    <AppBar position="static" style={{backgroundColor:'#101010',padding:'5px'}}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="h4" className="classes.Typographystyle">Edvora</Typography>
            <div  style={{display:'flex',marginRight:'10px'}}>
            <Typography variant="h6" className="classes.Typographystyle" style={{marginRight:'15px', alignItems:'center' }}>Muhammad Ibrahim</Typography>
            <Avatar alt="Ibrahim" src="assets/image/2021.jpg" className={classes.large} />
            </div>
            
        </Toolbar>
    </AppBar>
    
    </>)
}

export default Navbar