import {normalizedComments as defaultComments}   from '../data/fixtures';
import {} from '../constants';

export default (commentsState = defaultComments, action) => {
    const {type, payload} = action;

    switch (type) {
    }

    return commentsState;
}