import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import  Header  from './components/Header'
import ArticleList   from './components/ArticleList'
import UserForm from './components/UserForm'
import Filter   from './components/Filters'

import {articles}   from './data/fixtures'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Header />
                </header>
                <div>
                    <UserForm />
                    <Filter articles={articles} />
                    <ArticleList articles={articles}/>
                </div>
            </div>
        );
    }
}

export default App;
