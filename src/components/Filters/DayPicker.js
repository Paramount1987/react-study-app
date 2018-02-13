import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import moment   from 'moment';

import {connect}   from 'react-redux';
import {updateFilter}   from '../../AC';

class DayPickerControl extends React.Component {
    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.date);

        this.props.updateFilter({
            date: range
        });
    }
    handleResetClick = () => {
        this.props.updateFilter({
            date: {from: null, to: null}
        });
    }
    render() {
        const { from, to } = this.props.date;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default connect(state => ({
    date: state.filters.date
}),{updateFilter})(DayPickerControl);
