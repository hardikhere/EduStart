import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getAdminTokenFromLS } from './dataHelpers';



const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                getAdminTokenFromLS() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/school-admin/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;