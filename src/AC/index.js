import {DELETE_ARTICLE, INCREMENT, UPDATE_FILTER, ADD_COMMENT,
        LOAD_ALL_ARTICLES
}   from '../constants';

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

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'https://jsonplaceholder.typicode.com/posts'
    }
}