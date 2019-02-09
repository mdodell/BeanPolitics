import React from 'react';

import { Row } from 'antd';

import './CovfefeContainer.css';
import { Header, SubHeader, HeaderAbsoluteContainer, ArticleTitle } from "./styledComponents";

const CovfefeContainer = (props) => {
    return (
        <div className="background-image">
            <HeaderAbsoluteContainer>
                <Header>Covfefe</Header>
                <SubHeader>The Fake News Game</SubHeader>
            </HeaderAbsoluteContainer>


            <Row style={{minHeight: '100vh'}}type="flex" align="middle" justify="center">
                <ArticleTitle>
                    {props.children}
                 </ArticleTitle>
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