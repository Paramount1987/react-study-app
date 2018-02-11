import React, {Component}    from 'react';
import Article from './Article';
import PropTypes    from 'prop-types';

import accordion from './decorators/accordion';

class ArticleList extends Component {
    static propTypes = {
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

export default accordion(ArticleList);