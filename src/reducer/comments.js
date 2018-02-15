import {normalizedComments as defaultComments}   from '../data/fixtures';
import {arrToMap, mapToArr}   from '../helpers';
import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL} from '../constants';
import Immutable  from 'immutable';

//arrToMap(defaultComments)
const CommentRecord = Immutable.Record({
    body: null,
    name: '',
    id: null,
    postId: null,
});

//const ReduserState = Immutable.Record({
//    loading: false,
//    loaded: false,
//    entities: Immutable.OrderedMap({})
//});
const cRecord = Immutable.Record({
    loading: true,
    loaded: false,
    items: Immutable.List()
});

const defaultState = Immutable.Map({});

export default (commentsState = defaultState, action) => {
    const {type, payload, id} = action;

    switch (type) {
        case LOAD_COMMENTS + START:
            return commentsState.setIn([payload.articleId], new cRecord());

        case LOAD_COMMENTS + SUCCESS:
            return commentsState
                .setIn([payload.articleId, 'items'], payload.response)
                .setIn([payload.articleId, 'loading'], false)
                .setIn([payload.articleId, 'loaded'], true);

        case ADD_COMMENT:
            return commentsState.updateIn([payload.articleId, 'items']
                    ,list => list.concat([{...payload.comment, id}]));
    }

    return commentsState;
}