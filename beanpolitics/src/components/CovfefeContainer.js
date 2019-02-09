import React from 'react';

import { Row, Col, Button } from 'antd';

import './CovfefeContainer.css';
import { TextHeader, TextSubHeader, TextHeaderAbsoluteContainer, ArticleTitle } from "./styled-components";


const CovfefeContainer = (props) => {
    return (
        <div className="background-image">
            <Row style={{minHeight: '100vh', flexDirection: 'column'}} type="flex" align="middle" justify="space-around">
                <Col span={24}>
                    <TextHeader>Covfefe</TextHeader>
                    <TextSubHeader>The Fake News Game</TextSubHeader>
                </Col>

                <Col span={24}>
                    <ArticleTitle>
                        {props.children}
                    </ArticleTitle>
                </Col>

                <Col span={24}>
                    <Row type="flex" justify="space-around">
                        <Button type="primary">Real News</Button>
                        <Button type="danger">Fake News</Button>
                    </Row>
                </Col>
            </Row>

        </div>

    )
};

const style = {
    header: {
        fontSize: '20px',
        color: 'white'
    }
};

export default CovfefeContainer;