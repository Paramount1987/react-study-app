import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import  Header  from './components/Header'
import Articles   from './components/routes/Articles'
import NewArticle   from './components/routes/NewArticle'
import NotFound   from './components/routes/NotFound'
import UserForm from './components/UserForm'
import Filter   from './components/Filters'
import Counter  from './components/Counter'

import {BrowserRouter as Router, Switch, Route, NavLink}   from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Header />
                    </header>
                    <nav>
                        <h2>Main menu</h2>
                        <div><NavLink to="/counter" activeClassName="selected">Counter</NavLink></div>
                        <div><NavLink to="/filter" activeClassName="selected">Filter</NavLink></div>
                        <div><NavLink to="/articles" activeClassName="selected">Articles</NavLink></div>
                    </nav>
                    <Switch>
                        <Route path = "/counter" component = {Counter} />
                        <Route path = "/filter" component = {Filter} />
                        <Route path = "/articles/new" component = {NewArticle} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = "*" component = {NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
