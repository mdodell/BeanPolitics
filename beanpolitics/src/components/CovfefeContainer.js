import React, { Component } from 'react';

import { Row, Col, Button, Modal, Card } from 'antd';

import {
    TextHeader,
    TextSubHeader,
    ArticleTitle,
    WhiteHouseBackground,
    VerticleMarginOnStack,
    RedditImageDisplay,
    Image,
    RedText,
    WhiteText,
    BlueText,
    ArticleContainer
} from "./styled-components";

import { connect } from 'react-redux';
import {getRandomRedditPost} from "../actions";

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
        const data = this.props.redditPostData;
        if(!data){
            return '';
        }
        return data.title;
    };

    postThumbnail = () => {
        const data = this.props.redditPostData;
        if(!data) {
            return '';
        }
        return data.preview.images[0].source.url.replace("amp;", "");
    };

    openArticle = () => {
        const data = this.props.redditPostData;
        if(data) {
            window.open(data.url);
        }
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
                        <TextHeader>
                            <WhiteText>Covfefe</WhiteText>
                            <RedText>.</RedText>
                            <BlueText>io</BlueText>
                        </TextHeader>
                        <TextSubHeader>The Fake News Game</TextSubHeader>
                    </Col>

                    <Col span={24}>
                        <ArticleContainer>
                            <ArticleTitle>
                                {this.props.children}
                            </ArticleTitle>
                        </ArticleContainer>
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

                <Modal
                    centered
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Next Post"
                >
                    <RedditImageDisplay>
                        <Image src={this.postThumbnail()} />
                    </RedditImageDisplay>
                    <h1>{this.postTitle()}</h1>
                    <Button type="danger" onClick={this.openArticle} icon="book">Read Article</Button>
                </Modal>
            </WhiteHouseBackground>


        )
    }
}

const mapStateToProps = state => {
    return { redditPost: state.covfefe }
};

export default connect(mapStateToProps, {getRandomRedditPost})(CovfefeContainer);