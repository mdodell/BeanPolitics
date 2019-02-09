import React, { Component } from 'react';

import { Row, Col, Button, Modal, Card } from 'antd';

import { TextHeader, TextSubHeader, ArticleTitle, WhiteHouseBackground, VerticleMarginOnStack } from "./styled-components";

import { connect } from 'react-redux';
import {getRandomRedditPost} from "../actions";

const{ Meta } = Card;

class CovfefeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }

    checkPost = () => {
        this.showModal();
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        this.props.getRandomRedditPost('theonion', 'nottheonion');
    };

    postTitle = () => {
        if(!this.props.redditPostData){
            return '';
        }
        return this.props.redditPost[0].data.children[0].data.title;
    };

    postThumbnail = () => {
        if(!this.props.redditPostData) {
            return '';
        }
        return this.props.redditPost[0].data.children[0].data.thumbnail;
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){
        return (
            <WhiteHouseBackground>
                <Row style={{minHeight: '100vh', flexDirection: 'column'}} type="flex" align="middle" justify="space-around">
                    <Col span={24}>
                        <TextHeader>Covfefe</TextHeader>
                        <TextSubHeader>The Fake News Game</TextSubHeader>
                    </Col>

                    <Col span={24}>
                        <ArticleTitle>
                            {this.props.children}
                        </ArticleTitle>
                    </Col>

                    <Col span={24}>
                        <Row type="flex" align="middle" justify="space-around">
                            <Col xs={24} sm={8}>
                                <Row type="flex" justify="center">
                                    <VerticleMarginOnStack>
                                        <Button type="primary" onClick={this.checkPost}>Real News</Button>
                                    </VerticleMarginOnStack>
                                </Row>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Row type="flex" justify="center">
                                    <VerticleMarginOnStack>
                                        <Button type="primary" onClick={this.checkPost}>Fake News</Button>
                                    </VerticleMarginOnStack>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Modal style={{backgroundColor: 'green'}}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <img style={{width: '100%', marginTop: '3vh', height: '35vh'}}alt="example" src={this.postThumbnail()} />
                    <h1>{this.postTitle()}</h1>
                </Modal>
            </WhiteHouseBackground>


        )
    }
}

const mapStateToProps = state => {
    return { redditPost: state.covfefe }
};

export default connect(mapStateToProps, {getRandomRedditPost})(CovfefeContainer);