import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker    from './DayPicker';
import SelectControl   from './Select';

class Filter extends Component {
    render() {
        const {articles} = this.props;
        return (
            <div>
                <SelectControl articles={articles} />
                <DayPicker />
            </div>
        );
    }
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
