import React from 'react';
import { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './NavBar';
import SearchBar from '../containers/searchbar';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                <NavBar />
                <Switch>
                <Route path='/' exact />
                </Switch>
                </Router>
            
                </>
        );
    }
}

// <SearchBar />