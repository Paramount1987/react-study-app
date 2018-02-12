import React, {Component, PureComponent}    from 'react';
import findDOMNode from 'react-dom';
import PropTypes    from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import CommentList  from '../Comments/CommentList';
import './style.css';

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={{
             enter: 1000,
             exit: 900,
            }}
        appear={true}
        unmountOnExit={true}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

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
            <div ref={this.setContainerRef}>
                <h3>{article.title}!</h3>
                <button onClick={toggleOpen}>
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

       // if (!isOpen) return null;

        return (
            <Fade in={isOpen}>
                <section>
                    {article.text}
                    <CommentList comments={article.comments} ref={this.setCommentRef}/>
                </section>
            </Fade>
        )
    }
}

export default Article;