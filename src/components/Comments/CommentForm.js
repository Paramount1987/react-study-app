import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect}   from 'react-redux';
import {addComment}   from '../../AC';

import './index.css';

class CommentForm extends Component {
    state = {
        user: '',
        text: '',
    };

    render() {
        const {user, text} = this.state;

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
                        className={'form-input ' + this.getClassName('text')}
                        cols="30" rows="10"
                        value={text}
                        onChange={this.handleChange('text')} />
                </div>
                <button type="submit">Send comment</button>
            </form>
        );
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addComment(this.state, this.props.articleId);
        this.setState({
            user: '',
            text: ''
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
    text: {
        min: 20,
        max: 50
    }
}

CommentForm.propTypes = {};
CommentForm.defaultProps = {};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
    };
};

export default connect(null,{addComment})(CommentForm);
