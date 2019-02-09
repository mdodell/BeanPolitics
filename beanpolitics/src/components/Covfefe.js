import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRandomRedditPost } from '../actions'

class Covfefe extends Component {

    componentDidMount(){
        this.props.getRandomRedditPost()
    }

    render() {
        console.log(this.props.redditPost);
        return <div className="Covfefe">
            <h1>Covfefe</h1>
        </div>;
    }
}

const mapStateToProps = state => {
    return {redditPost: state.covfefe}
};

export default connect(mapStateToProps, {getRandomRedditPost})(Covfefe);
