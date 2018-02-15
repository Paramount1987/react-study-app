import React from 'react';
import PropTypes    from 'prop-types';
import {connect}    from 'react-redux';
import {commentSelectorFactory}   from '../../selectors';

function Comment({comment}) {
    return (
        <div>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default Comment;