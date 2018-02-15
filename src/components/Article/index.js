import React, {Component, PureComponent}    from 'react';
import findDOMNode from 'react-dom';
import PropTypes    from 'prop-types';
import {connect}    from 'react-redux';
import {deleteArticle, loadArticle}   from '../../AC';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loader   from '../Loader';

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
            //id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string
        }).isRequired
    };

    state = {
        updateIndex: 0
    };

    componentWillReceiveProps({isOpen, loadArticle, article}) {
        // !article.body && !this.props.isOpen
        if(isOpen && !article.loaded && !article.loading) loadArticle(article.id);
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
        const {article, isOpen } = this.props;
        console.log('loading: ', article.loading);

        if (!isOpen) return null;
        if(article.loading) return <Loader />;

        return (
           <Fade in={isOpen}>
                <section>
                    {article.body}
                    <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                    <CommentList articleId={article.id} ref={this.setCommentRef} key = {this.state.updateIndex} />
                </section>
           </Fade>
        )
    }
}

export default connect(null, {deleteArticle, loadArticle})(Article);