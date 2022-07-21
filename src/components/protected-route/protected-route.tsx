import React, {FC} from "react";
import {Redirect, Route, useLocation} from "react-router-dom";
import {useSelector} from "../../service/hooks";


export const ProtectedRoute: FC<TProtectedRoute> = ({isAuthOnly = false, children, ...rest}) => {

    const {user} = useSelector(store => store.auth)
    const location = useLocation()

    if (!isAuthOnly && user) {

        const {from}: any = location.state || {from: {pathname: '/'}}

        return (
            <Route {...rest}>
                <Redirect to={from}/>
            </Route>
        )
    }

    if (isAuthOnly && !user) {
        return (
            <Route {...rest}>
                <Redirect to={{pathname: '/login', state: {from: location}}}/>
            </Route>
        )
    }

    return (
        <Route {...rest}>
            {children}
        </Route>);
}