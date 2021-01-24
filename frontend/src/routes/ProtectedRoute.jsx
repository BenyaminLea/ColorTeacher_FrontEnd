import { Redirect, Route } from "react-router-dom";
import auth from '../components/lib/auth'
import React from 'react';

function ProtectedRoute({ component: Component, ...rest }) {

    return (
        <Route {...rest} render={
            (props) => {
                if ((auth.isAuthenticated())) {
                    return (
                        <Component {...props} {...rest} />
                    )
                } else {
                    return (
                        <Redirect to={{
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                        } />
                    )
                }
            }
        } />
    )
}

export default ProtectedRoute;