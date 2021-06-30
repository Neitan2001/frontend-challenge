import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/detail/:id' exact component={BookDetail} />
            </Switch>
        </Router>
    );

}

export default Routes;
