import React, {Component, PureComponent}    from 'react';
import findDOMNode from 'react-dom';
import PropTypes    from 'prop-types';
import {connect}    from 'react-redux';
import {deleteArticle, loadArticle}   from '../../AC';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loader   from '../Loader';
import LocalizedText    from '../../LocalizedText';

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

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        // from connect
        article: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string
        })
    };

    state = {
        updateIndex: 0
    };

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        // !article.body && !this.props.isOpen
        if(!article || (!article.loading && !article.loaded)) loadArticle(1*id);
    }
    
    render() {
        const {article, isOpen, toggleOpen} = this.props;
        if(!article) return null;

        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}!</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick={this.handleDelete}>
                    <LocalizedText>delete me</LocalizedText>
                </button>
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

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(1*ownProps.id)
}),
    {deleteArticle, loadArticle},
    null,
    {pure: false}
)(Article);