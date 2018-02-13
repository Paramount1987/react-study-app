import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerControl    from './DayPicker';
import SelectControl   from './Select';

class Filter extends Component {
    render() {
        return (
            <div>
                <SelectControl />
                <DayPickerControl />
            </div>
        );
    }
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
