import moment   from 'moment';
import {createSelector}   from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filterArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const {filterByValue} = filters;
    const {from, to} = filters.date;
    const timeFrom = moment(from);
    const timeTo = moment(to);

    return articles.filter(article => {
        const articleTime = moment(article.date);

        return (!filterByValue.length || filterByValue.includes(article.id)) &&
            (!from || !to || (articleTime.diff(timeFrom) > 0 && articleTime.diff(timeTo) < 0))
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.find(comment => comment.id === id)
});