import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


// If currentUser is not present, Redirect to login page
// or if there is no login, Redirect to login page.
function PrivateRoute({ Component: component, ...rest}) {
    //! Context
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        >
        </Route>
    )
}

export default PrivateRoute
