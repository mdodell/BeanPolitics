import styled from 'styled-components';

import { device } from './device';

import whiteHouse from '../../images/whiteHouse.jpg';

export const WhiteHouseBackground = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${whiteHouse}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    overflow-x: hidden!important;
`;

export const TextHeader = styled.h1`
    font-size: 8vw;
    color: white;
    font-family: Helvetica;
    margin: 0;
    text-align: center;
    
    @media ${device.mobileS} { 
         font-size: 16vw;
    }
    
    @media ${device.laptop} { 
         font-size: 8vw;
    }
`;

export const TextSubHeader = styled.h3`
    color: white;
    font-family: Helvetica
    margin: 0;
    text-align: center;
    
    @media ${device.mobileS} { 
         font-size: 8vw;
    }
    
    @media ${device.tablet} { 
         font-size: 6vw;
    }
    
    @media ${device.laptop} { 
         font-size: 4vw;
    }
    
    @media ${device.laptopL} { 
         font-size: 4vw;
    }
`;

export const ArticleTitle = styled.h2`
    text-align: center;
    margin: 0 5vh;
    color: white;
    font-family: Helvetica
    
    @media ${device.mobileS} { 
         font-size: 6vw;
    }
    
    @media ${device.laptop} { 
         font-size: 3vw;
    }
    
`;