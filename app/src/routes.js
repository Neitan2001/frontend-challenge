import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Login from './pages/Login';
import ProtectedRoute from './components/protected-route';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <ProtectedRoute path='/home' exact component={Home} />
                <ProtectedRoute path='/detail/:id' exact component={BookDetail} />
            </Switch>
        </Router>
    );

}

export default Routes;
