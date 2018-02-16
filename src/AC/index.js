import {DELETE_ARTICLE, INCREMENT, UPDATE_FILTER, ADD_COMMENT,
        LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_COMMENTS, START, SUCCESS, FAIL
}   from '../constants';
import {push, replace}   from 'react-router-redux';

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

export function loadComments(articleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: {articleId}
        });

        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}/comments`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: {articleId, response}
                }))
                .catch(error => dispatch({
                    type: LOAD_COMMENTS + FAIL,
                    payload: {articleId, error}
                }))
        }, 1000);
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'https://jsonplaceholder.typicode.com/posts'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        });

        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error(res.statusText)
                    }
                    return res.json()
                })
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id, response}
                }))
                .catch(error => {
                    dispatch({
                        type: LOAD_ARTICLE + FAIL,
                        payload: {id, error}
                    })
                    dispatch(replace('/error'))
                })
        }, 1000);
    }
}

//export function loadArticle(id) {
//    return {
//        type: LOAD_ARTICLE,
//        callAPI: `https://jsonplaceholder.typicode.com/posts/${id}`
//    }
//}