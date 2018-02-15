import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList  from '../ArticleList';
import Article  from '../Article';
import {Route}  from 'react-router-dom';

class Articles extends Component {
    render() {
        return (
            <div>
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
        return <h2>Please select article</h2>;
        return <Article id={id} key={id} isOpen/>
    }
}

Articles.propTypes = {};
Articles.defaultProps = {};

export default Articles;
