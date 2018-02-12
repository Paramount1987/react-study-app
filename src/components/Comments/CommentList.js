import React, {Component}   from 'react';
import toggleOpen   from '../decorators/toggleOpen';

import Comment  from './Comment';
import CommentForm  from './CommentForm';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        const {isOpen, toggleOpen} = this.props;
        const commentsList = this.renderCommentList();

        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close comments' : 'Open comments'}
                </button>
                {commentsList}
            </div>
        )
    }

    renderCommentList() {
        const {comments, isOpen} = this.props;

        if (!isOpen) return null;

        if (!comments.length) return <p>No comments yet</p>;

        return (
            <div>
                <CommentForm />
                <ul>
                    {comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)}
                </ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList);