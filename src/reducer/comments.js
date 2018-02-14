import {normalizedComments as defaultComments}   from '../data/fixtures';
import {arrToMap}   from '../helpers';
import {ADD_COMMENT} from '../constants';

//arrToMap(defaultComments)

export default (commentsState = {}, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}
    }

    return commentsState;
}