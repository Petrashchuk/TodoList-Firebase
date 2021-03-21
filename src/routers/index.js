import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile";
import ForgotPassword from '../pages/forgot-password/forgot-password';
import PrivateRoute from './private-router'

function R() {
    return <div>www</div>
}

export default function RootRouter() {
    return (
        <Router>
            <Switch>
                <Route path='/home'>
                    <Route path="/home/login" component={Login}/>
                    <Route path="/home/register" component={Register}/>
                    <Route path='/home/forgot-password' component={ForgotPassword}/>
                </Route>
                <PrivateRoute path='/profile' appProps={{isAuth: false}} component={Profile}/>
                <Redirect to='/home/login'/>
            </Switch>
        </Router>
    );
}
