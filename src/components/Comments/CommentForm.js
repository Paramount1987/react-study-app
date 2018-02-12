import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class CommentForm extends Component {
    state = {
        user: '',
        comment: '',
    };

    render() {
        const {user, comment} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>User name:
                    <input
                        className={'form-input ' + this.getClassName('user')}
                        type="text"
                        value={user}
                        onChange={this.handleChange('user')} />
                </div>
                <div>Comment:
                    <textarea
                        className={'form-input ' + this.getClassName('comment')}
                        cols="30" rows="10"
                        value={comment}
                        onChange={this.handleChange('comment')} />
                </div>
                <button type="submit">Send comment</button>
            </form>
        );
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            comment: ''
        });
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'has-error' : ''

    handleChange = type => (ev) => {
        const {value} = ev.target;
        if(value.length > limits[type].max) return;

        this.setState({
            [type]: value
        });
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    comment: {
        min: 20,
        max: 50
    }
}

CommentForm.propTypes = {};
CommentForm.defaultProps = {};

export default CommentForm;
