import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import  Header  from './components/Header'
import ArticleList   from './components/ArticleList'
import UserForm from './components/UserForm'
import Filter   from './components/Filters'
import Counter  from './components/Counter'

import {HashRouter as Router, Route, NavLink}   from 'react-router-dom'

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

                    <Route path = "/counter" component = {Counter} />
                    <Route path = "/filter" component = {Filter} />
                    <Route path = "/articles" component = {ArticleList} />
                </div>
            </Router>
        );
    }
}

export default App;
