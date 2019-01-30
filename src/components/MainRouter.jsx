import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import ProfileList from './users/Users';
import ProfileView from './users/UserView';
import ProfileCreate from './users/UserCreate';

class MainRouter extends Component {
    render () {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/users" component={ProfileList} exact />
                <Route path="/users/create" component={ProfileCreate} />
                <Route path="/users/:id" component={ProfileView} />

            </Switch>
        );
    }
}

export default MainRouter;