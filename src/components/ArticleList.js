import React, {Component}    from 'react';
import Article from './Article';
import PropTypes    from 'prop-types';
import {filterArticlesSelector}   from '../selectors';

import accordion from './decorators/accordion';
import {connect}    from 'react-redux';

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired
    };

    static defaultProps = {
        articles: []
    };

    render() {
        const {openItemId, toggleOpen, articles} = this.props;

        const articleElements = articles.map((article) => <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpen(article.id)}
            />
        </li> );
        return (
            <ul> {articleElements}</ul>
        )
    }
}

export default connect((state) => {
    return {
        articles: filterArticlesSelector(state)
    }
})(accordion(ArticleList));