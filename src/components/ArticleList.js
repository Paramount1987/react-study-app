import React, {Component}    from 'react';
import Article from './Article';
import PropTypes    from 'prop-types';
import moment   from 'moment';

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

export default connect(({filters, articles}) => {
    const {filterByValue} = filters;
    const {from, to} = filters.date;
    const timeFrom = moment(from);
    const timeTo = moment(to);

    const filteredArticles = articles.filter(article => {
        const articleTime = moment(article.date);

        return (!filterByValue.length || filterByValue.includes(article.id)) &&
            (!from || !to || (articleTime.diff(timeFrom) > 0 && articleTime.diff(timeTo) < 0))
    });

    return {
        articles: filteredArticles
    }
})(accordion(ArticleList));