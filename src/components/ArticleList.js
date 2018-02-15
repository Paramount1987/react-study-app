import React, {Component}    from 'react';
import PropTypes    from 'prop-types';
import {filterArticlesSelector}   from '../selectors';

import accordion from './decorators/accordion';
import {connect}    from 'react-redux';
import {loadAllArticles}   from '../AC';

import Loader   from './Loader';
import {NavLink}   from 'react-router-dom';

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array,
        //from accordion
        openItemId: PropTypes.number,
        toggleOpen: PropTypes.func
    };

    static defaultProps = {
        articles: []
    };

    componentDidMount() {
        const {loading, loaded, loadAllArticles} = this.props;
        if(!loaded && !loading) loadAllArticles();
    }

    render() {
        const {articles, loading} = this.props;

        if(loading) return <Loader />;

        const articleElements = articles.map((article) => <li key = {article.id}>
            <NavLink to = {`/articles/${article.id}`} activeClassName="selected">
                {article.title}
            </NavLink>
        </li> );
        return (
            <div>
                <ul>{articleElements}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        articles: filterArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(ArticleList);