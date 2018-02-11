import React, {Component, PureComponent}    from 'react';
import findDOMNode from 'react-dom';
import PropTypes    from 'prop-types';

import CommentList  from './Comments/CommentList';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}!</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log(this.container);
    }

    setCommentRef = ref => {
        console.log(ref);
    }

    getBody() {
        const {article, isOpen} = this.props;

        if(!isOpen) return null;

        return <section>
            {article.text}
            <CommentList comments = {article.comments} ref= {this.setCommentRef} />
        </section>;
    }
}

export default Article;