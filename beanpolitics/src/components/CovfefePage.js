import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRandomRedditPost } from '../actions'
import { Spin } from 'antd';

import CovfefeContainer from './CovfefeContainer';


class CovfefePage extends Component {

    componentDidMount(){
        this.props.getRandomRedditPost('theonion', 'nottheonion');
    }

    render() {
        if(!this.props.redditPost){
            return (
                <CovfefeContainer redditPostData={null}>
                    <Spin size="large"/>
                </CovfefeContainer>
            )
        }
        const data = this.props.redditPost[0].data.children[0].data;
        console.log(data);
        return (
            <CovfefeContainer redditPostData={data}>
                {data.title}
            </CovfefeContainer>
        )
    }
}

const mapStateToProps = state => {
    return { redditPost: state.covfefe }
};

export default connect(mapStateToProps, {getRandomRedditPost})(CovfefePage);
