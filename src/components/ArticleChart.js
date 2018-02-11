import React, {Component} from 'react';
import PropTypes    from 'prop-types';

class ArticleChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        // d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {
        //update chart for new articles
    }

    render() {
        return <div ref = 'chart' ></div>
    }

    componentWillUnmout() {
        // do some cleanup
    }
}

export default ArticleChart;