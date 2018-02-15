import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect}   from 'react-redux';
import {addComment}   from '../../AC';

import './index.css';

class CommentForm extends Component {
    state = {
        name: '',
        body: '',
    };

    render() {
        const {name, body} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>User name:
                    <input
                        className={'form-input ' + this.getClassName('name')}
                        type="text"
                        value={name}
                        onChange={this.handleChange('name')} />
                </div>
                <div>Comment:
                    <textarea
                        className={'form-input ' + this.getClassName('body')}
                        cols="30" rows="10"
                        value={body}
                        onChange={this.handleChange('body')} />
                </div>
                <button type="submit">Send comment</button>
            </form>
        );
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addComment(this.state, this.props.articleId);
        this.setState({
            name: '',
            body: ''
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
    name: {
        min: 5,
        max: 15
    },
    body: {
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
