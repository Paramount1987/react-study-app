import {normalizedArticles as defaultArticles}   from '../data/fixtures';
import {arrToMap}   from '../helpers';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import Immutable  from 'immutable';

const ArticleRecord = Immutable.Record({
    text: null,
    title: '',
    id: null,
    comments: []
});

const defaultState = Immutable.Map({});

export default (articlesState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {
        case LOAD_ALL_ARTICLES:
            return arrToMap(response, ArticleRecord);
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id);
        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId));
            //const article = articlesState[payload.articleId];
            //return {
            //    ...articlesState,
            //    [payload.articleId]: {
            //        ...article,
            //        comments: (article.comments || []).concat(randomId)
            //    }
            //}
    }

    return articlesState;
}