import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import  Header  from './components/Header'
import ArticleList   from './components/ArticleList'
import UserForm from './components/UserForm'
import Select   from 'react-select'
import 'react-select/dist/react-select.css'

import {articles}   from './data/fixtures'

class App extends Component {

    state = {
        selection: null
    }

    render() {
        const options = articles.map(article => ({
           label: article.title,
           value: article.id
        }))

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Header />
                </header>
                <div>
                    <Select options={options}
                            multi
                            value= {this.state.selection} onChange={this.changeSelection} />
                    <UserForm />
                    <ArticleList articles={articles}/>
                </div>
            </div>
        );
    }

    changeSelection = (select) => this.setState({selection: select})
}

export default App;
