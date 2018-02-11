import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import  Header  from './components/Header'
import ArticleList   from './components/ArticleList'

import {articles}   from './data/fixtures'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Header />
        </header>
        <div>
            <ArticleList articles = {articles} />
        </div>
      </div>
    );
  }
}

export default App;
