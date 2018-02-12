import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select   from 'react-select';
import 'react-select/dist/react-select.css';

class SelectControl extends Component {
    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <Select options={options}
                    multi
                    value= {this.state.selection} onChange={this.changeSelection} />
        );
    }

    changeSelection = (select) => this.setState({selection: select})
}

SelectControl.propTypes = {};
SelectControl.defaultProps = {};

export default SelectControl;
