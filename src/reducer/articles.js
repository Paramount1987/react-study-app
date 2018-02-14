import {normalizedArticles as defaultArticles}   from '../data/fixtures';
import {arrToMap}   from '../helpers';
import {DELETE_ARTICLE, LOAD_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS} from '../constants';
import Immutable  from 'immutable';

const ArticleRecord = Immutable.Record({
    body: null,
    title: '',
    id: null,
    loading: false,
    comments: []
});

const ReduserState = Immutable.Record({
    loading: false,
    loaded: false,
    entities: Immutable.OrderedMap({})
});

const defaultState = new ReduserState();

export default (articlesState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                    .set('entities', arrToMap(response, ArticleRecord))
                    .set('loading', false)
                    .set('loaded', true);

        case LOAD_ARTICLE + START:
            return articlesState.setIn(['entities', payload.id, 'loading'], true);

        case LOAD_ARTICLE + SUCCESS:
            return articlesState.setIn(['entities', payload.id], new ArticleRecord(payload.response));

        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.id]);

        case ADD_COMMENT:
            return articlesState.updateIn(
                ['entities',payload.articleId, 'comments'],
                comments => comments.concat(randomId)
            );
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