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
import PrivateRoute from './private-router'

export default function RootRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <PrivateRoute path='/profile' appProps={{isAuth: false}} component={Profile}/>
                <Redirect to='/login'/>
            </Switch>
        </Router>
    );
}
