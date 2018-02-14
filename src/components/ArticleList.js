import React, {Component}    from 'react';
import Article from './Article';
import PropTypes    from 'prop-types';
import {filterArticlesSelector}   from '../selectors';

import accordion from './decorators/accordion';
import {connect}    from 'react-redux';
import {loadAllArticles}   from '../AC';

import Loader   from './Loader';

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array,
        //from accordion
        openItemId: PropTypes.number,
        toggleOpen: PropTypes.func.isRequired
    };

    static defaultProps = {
        articles: []
    };

    componentDidMount() {
        const {loading, loaded, loadAllArticles} = this.props;
        if(!loaded || !loading) loadAllArticles();
    }

    render() {
        const {openItemId, toggleOpen, articles, loading} = this.props;

        if(loading) return <Loader />;

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
        articles: filterArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(accordion(ArticleList));