import {articles as defaultArticles}   from '../data/fixtures';
import {UPDATE_FILTER, DELETE_ARTICLE} from '../constants';

const defaultState = {
    date: {
        from: null,
        to: null
    },
    filterByValue: []
};

export default (filters = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_FILTER:
            return {...filters, ...payload};
        case DELETE_ARTICLE:
            return {...filters, filterByValue: filters.filterByValue.filter(id => id !== payload.id)}
    }

    return filters;
}
