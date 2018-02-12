import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect}    from 'react-redux';
import {increment}   from '../AC';

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        );
    }

    handleIncrement = ()=> {
        const {increment} = this.props;
        increment();
    }
}

Counter.propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

const mapToDispatch = {increment};

export default connect(mapStateToProps, mapToDispatch)(Counter);
