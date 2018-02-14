import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select   from 'react-select';
import 'react-select/dist/react-select.css';

import {connect}   from 'react-redux';
import {updateFilter}   from '../../AC';
import {mapToArr}   from '../../helpers';

class SelectControl extends Component {

    render() {
        const {articles, filterByValue} = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <Select options={options} multi
                    value={filterByValue} onChange={this.changeSelection}/>
        );
    }

    changeSelection = (select) => {
        const values = select.map((item) => item.value);
        this.props.updateFilter({filterByValue: values});
    }
}

SelectControl.propTypes = {
    articles: PropTypes.array.isRequired,
    filterByValue: PropTypes.array.isRequired,
    updateFilter: PropTypes.func.isRequired
};
SelectControl.defaultProps = {};

export default connect(state => ({
    articles: mapToArr(state.articles.entities),
    filterByValue: state.filters.filterByValue
}), {updateFilter})(SelectControl);
