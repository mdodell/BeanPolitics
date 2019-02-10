import styled from 'styled-components';

import { device } from './device';

import whiteHouse from '../../images/whiteHouse.jpg';
import pattern from '../../images/pattern.png';

export const WhiteHouseBackground = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${whiteHouse}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    overflow-x: hidden!important;
`;

export const VoterInfoBackground = styled.div`
   background-image: url(${pattern});
   background-color: #194ae0;
   min-height: 100vh;
   overflow-x: hidden!important;
`;

export const TextHeader = styled.h1`
    font-size: 8vw;
    color: white;
    font-family: Segoe UI;
    margin: 0;
    text-align: center;
    
    @media ${device.mobileS} { 
         font-size: 16vw;
    }
    
    @media ${device.laptop} { 
         font-size: 8vw;
    }
`;

export const TextSubHeader = styled.h5`
    color: white;
    font-family: Segoe UI;
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
`;

export const ArticleContainer = styled.div`
   margin: 0 auto;
   border-radius: 25px;
   background-color: rgba(0, 0, 0, 0.6);
   width: 80%;
   height; 100%;
   padding: 0 5vh;
`;

export const BlueText = styled.span`
    color: blue;
`;

export const RedText = styled.span`
    color: red;
`;

export const WhiteText = styled.span`
    color: white;
`;

export const ArticleTitle = styled.h2`
    text-align: center;
    margin: 0 5vh;
    color: white;
    font-family: Segoe UI;
    
    @media ${device.mobileS} { 
         font-size: 6vw;
         margin: 0;
    }
    
    @media ${device.laptop} { 
         font-size: 3vw;
         margin: 0 5vh;
    }
`;

export const RedditImageDisplay = styled.div`
    width: 100%;
    margin-top: 3vh;
    height: 35vh;
    border: 2px solid black;
    background-position: bottom center
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const VerticleMarginOnStack = styled.div`
    @media ${device.mobileS} {
        margin: 2.5vh 0;
    }    
`;