import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dictionaries from './dictionaries';

class LangProvider extends Component {
    static childContextTypes = {
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            dictionary: dictionaries[this.props.language]
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

LangProvider.propTypes = {
    language: PropTypes.string
};
LangProvider.defaultProps = {};

export default LangProvider;
