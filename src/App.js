import React, { Component } from 'react'
import PropTypes    from 'prop-types'
import logo from './logo.svg'
import './App.css'

import  Header  from './components/Header'
import Articles   from './components/routes/Articles'
import NewArticle   from './components/routes/NewArticle'
import NotFound   from './components/routes/NotFound'
import UserForm from './components/UserForm'
import Filter   from './components/Filters'
import Counter  from './components/Counter'

import {Switch, Route, NavLink}   from 'react-router-dom'
import {ConnectedRouter}   from 'react-router-redux'
import history  from './history'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    state = {
        username: ''
    }

    render() {
        return (
            <ConnectedRouter history = {history}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Header />
                    </header>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange} />
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
            </ConnectedRouter>
        );
    }

    handleUserChange = (username) => this.setState({ username })
}

export default App;
