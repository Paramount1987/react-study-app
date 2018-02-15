import React, {Component}   from 'react';
import {connect}    from 'react-redux';
import toggleOpen   from '../decorators/toggleOpen';

import Comment  from './Comment';
import CommentForm  from './CommentForm';

import {loadComments}   from '../../AC';
import {commentsSelector}   from '../../selectors';

import Loader   from '../Loader';

class CommentList extends Component {

    componentWillReceiveProps({isOpen, articleId, comments}) {
        if(isOpen && !comments.get(articleId)) this.props.loadComments(articleId);
    }

    render() {

        const {isOpen, toggleOpen, articleId, comments} = this.props;
        const commentsList = this.renderCommentList(comments, articleId, isOpen);

        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close comments' : 'Open comments'}
                </button>
                {commentsList}
            </div>
        )
    }

    renderCommentList(comments, articleId, isOpen) {
        const commentsMap = comments.get(articleId);

        if (!commentsMap || !isOpen) return null;

        if(commentsMap.loading) return <Loader />;

        if (commentsMap.items && !commentsMap.items.length) {
            console.log('commnets length',commentsMap.items);
            return (
                <div>
                    <p>No comments yet</p>
                    <CommentForm articleId={articleId} />
                </div>
            )
        }
        console.log('commnets length',commentsMap.items);
        return (
            <div>
                <CommentForm articleId={articleId} />
                <ul>
                    {commentsMap.items.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)}
                </ul>
            </div>
        )
    }
}

export default connect(state => {
    return {
        comments: state.comments
        //comments: commentsSelector(state)
    }
},{loadComments})(toggleOpen(CommentList));