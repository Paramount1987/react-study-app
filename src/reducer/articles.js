import {articles as defaultArticles}   from '../data/fixtures';
import {DELETE_ARTICLE} from '../constants';

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE: return articlesState.filter(article => article.id !== payload.id);
    }

    return articlesState;
}