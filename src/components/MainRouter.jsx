import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import UsersList from './users/Users';
import UserView from './users/UserView';
import UserCreate from './users/UserCreate';

class MainRouter extends Component {
    render () {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/users" component={UsersList} exact />
                <Route path="/users/create" component={UserCreate} exact />
                <Route path="/users/:id" component={UserView} />
            </Switch>
        );
    }
}

export default MainRouter;