import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ ...routesProps }) => {
    const _userId = localStorage.getItem('@bookapp/userId');

    if (!_userId) {
        return <Redirect to="/" />;
    };
    return <Route {...routesProps} />;
}

export default ProtectedRoute;
