import styled from 'styled-components';

export const HeaderAbsoluteContainer = styled.div`
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    text-align: center;
`;

export const Header = styled.h1`
    font-size: 8vw;
    color: white;
    font-family: Helvetica;
    margin: 0;
`;

export const SubHeader = styled.h3`
    font-size: 4vw;
    color: white;
    font-family: Helvetica
    margin: 0;
`;

export const ArticleTitle = styled.h2`
    text-align: center;
    width: 70%;
    margin: 0;
    font-size: 2vw;
    color: white;
    font-family: Helvetica
`;