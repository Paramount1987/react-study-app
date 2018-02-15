import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList  from '../ArticleList';
import Article  from '../Article';
import {Route}  from 'react-router-dom';

class Articles extends Component {
    render() {
        return (
            <div>
                <Route path="/articles" render={this.getIndex} exact/>
                <table>
                    <tbody>
                        <tr>
                            <td><ArticleList /></td>
                            <td><Route path="/articles/:id" render={this.getArticle}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    getArticle = ({match}) => {
        const {id} = match.params;
        return <Article id={id} key={id} isOpen/>
    }

    getIndex = () => {
        return <h2>Please select article</h2>;
    }
}

Articles.propTypes = {};
Articles.defaultProps = {};

export default Articles;
