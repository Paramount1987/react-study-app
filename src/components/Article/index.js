import React, {Component, PureComponent}    from 'react';
import findDOMNode from 'react-dom';
import PropTypes    from 'prop-types';
import {connect}    from 'react-redux';
import {deleteArticle}   from '../../AC';
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
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    state = {
        updateIndex: 0
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}!</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick={this.handleDelete}>Delete me</button>
                {this.getBody()}
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }

    setContainerRef = ref => {
        this.container = ref;
    }

    setCommentRef = ref => {
        console.log();
    }

    getBody() {
        const {article, isOpen} = this.props;

       // if (!isOpen) return null;

        return (
            <Fade in={isOpen}>
                <section>
                    {article.text}
                    <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                    <CommentList article={article} ref={this.setCommentRef} key = {this.state.updateIndex} />
                </section>
            </Fade>
        )
    }
}

export default connect(null, {deleteArticle})(Article);