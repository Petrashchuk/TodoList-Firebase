import {
    Route,
    Redirect
} from "react-router-dom";

export default function PrivateRoute ({component: C, appProps, ...rest}){
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    appProps.isAuth
                        ? <C {...props} {...appProps} />
                        : <Redirect to="/"/>
                )
            }}
        />
    )
}