import React from 'react';
import {AppBar} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navLink: {
        margin: theme.spacing(0, 3),
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: '#c7c7c7'
        }
    },
}));


export default function HeaderHome() {
    const classes = useStyles();
    return (
        <AppBar position="static" elevation={5}>
            <Toolbar>
                <Typography variant="h6">
                    <Link className={classes.navLink} to='/home/login'>Login</Link>
                </Typography>
                <Typography variant="h6">
                    <Link className={classes.navLink} to='/home/register'>Register</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}