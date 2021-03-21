import React from 'react'
import {
    Grid,
    Paper,
    CssBaseline,
    Avatar,
    TextField,
    Button,
    Typography,
    Container,
    Box,
    Divider
} from "@material-ui/core";
import {Link} from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from '@material-ui/core/styles';
import HeaderHome from '../../components/homeHeader/index';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(4,0),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Register(props){
    const classes = useStyles();

    return(
        <>
            <HeaderHome/>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Email"
                                autoFocus
                            />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Send
                    </Button>
                </form>
            </div>
            <Divider/>
            <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'© 2021 Todo List App.'}
                </Typography>
            </Box>
        </Container>
        </>
    )
}