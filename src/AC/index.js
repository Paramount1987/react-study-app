import {DELETE_ARTICLE, INCREMENT, UPDATE_FILTER}   from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function updateFilter(filter) {
    return {
        type: UPDATE_FILTER,
        payload: filter
    }
}