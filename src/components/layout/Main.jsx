import React, { Component } from 'react'
import { BrowserRouter} from 'react-router-dom';
import Header from './Header'
import MainRouter from '../MainRouter';


class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <br/>
                    <main className="container">
                        <MainRouter/>
                    </main>
                </React.Fragment>

            </BrowserRouter>
        );
    }
}

export default Main