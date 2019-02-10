import React, { Component } from 'react';

import { Row, Col, Button, Modal, Progress, Tooltip } from 'antd';

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
            visible: false,
            totalCount: 0,
            rightCount: 0,
            wrongCount: 0,
            totalPercent: 0,
            rightPercent: 0
        }
    }

    checkIfReal = () => {
        let answer = this.props.redditPostData.subreddit === 'nottheonion' ? true : false;
        if(answer){
            this.increaseRight();
        } else {
           this.increaseWrong();
        }
        this.increaseTotal();
        this.showModal();
        return answer;
    };

    setProgressBar = () => {
        let totalPercent = this.state.totalCount * 100;
        if(totalPercent >= 100){
            totalPercent = 100;
        }

        let rightPercent = 0;

        if(this.state.rightCount !== 0){
            rightPercent = (this.state.rightCount / this.state.totalCount) * 100;
        }

        let wrongPercent = 0;

        if(this.state.wrongCount !== 0){
            wrongPercent = (this.state.wrongCount / this.state.totalCount) * 100;
        }

        this.setState({
            totalPercent: totalPercent,
            rightPercent: rightPercent,
            wrongPercent: wrongPercent,
        })

    };

    checkIfFake = () => {
        let answer = this.props.redditPostData.subreddit === 'TheOnion' ? true : false;
        if(answer){
            this.increaseRight();
        } else {
            this.increaseWrong();
        }
        this.increaseTotal();
        this.showModal();
        return answer;
    };

    increaseWrong = () => {
        let wrongCount = this.state.wrongCount + 1;

        this.setState({wrongCount})
    };

    increaseRight = () => {
        let rightCount = this.state.rightCount + 1;

        this.setState({ rightCount })
    };

    increaseTotal = () => {
        let totalCount = this.state.totalCount + 1;

        this.setState({ totalCount }, () => {
            this.setProgressBar();
        });
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
                            <Col xs={{span: 24, order: 0}} sm={{span: 8, order: 0}}>
                                <Row type="flex" justify="center">
                                    <VerticleMarginOnStack>
                                        <Button type="primary" onClick={this.checkIfReal}>Real News</Button>
                                    </VerticleMarginOnStack>
                                </Row>
                            </Col>

                                <Col xs={{span: 20, order: 1}} sm={{span: 8, order: 0}}>
                                    <Row type="flex" justify="center">
                                        <Tooltip title={`${this.state.rightCount}/${this.state.totalCount}`}>
                                            <Progress
                                                style={{cursor: 'pointer'}}
                                                percent={this.state.totalPercent}
                                                successPercent={this.state.rightPercent}
                                                size="small"
                                                strokeColor="red"
                                                showInfo={false}
                                            />
                                        </Tooltip>
                                    </Row>
                                </Col>


                            <Col xs={{span: 24, order: 0}} sm={{span: 8, order: 0}}>
                                <Row type="flex" justify="center">
                                    <VerticleMarginOnStack>
                                        <Button type="primary" onClick={this.checkIfFake}>Fake News</Button>
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