import React, {Component}   from 'react';
import toggleOpen   from '../decorators/toggleOpen';

import Comment  from './Comment';
import CommentForm  from './CommentForm';

class CommentList extends Component {
    static defaultProps = {
        article: {}
    };

    render() {
        const {isOpen, toggleOpen, article} = this.props;
        const commentsList = this.renderCommentList(article, isOpen);

        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close comments' : 'Open comments'}
                </button>
                {commentsList}
            </div>
        )
    }

    renderCommentList({comments = [], id}, isOpen) {
        if (!isOpen) return null;

        if (!comments.length) {
            return (
                <div>
                    <p>No comments yet</p>
                    <CommentForm articleId={id}/>
                </div>
            )
        }

        return (
            <div>
                <CommentForm articleId={id}/>
                <ul>
                    {comments.map((id) => <li key={id}><Comment id={id}/></li>)}
                </ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList);