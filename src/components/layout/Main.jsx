import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Header'
import MainRouter from '../MainRouter';


class Main extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header/>
                    <br/>
                    <main className="container">
                        <MainRouter/>
                    </main>
                </React.Fragment>

            </Router>
        );
    }
}

export default Main