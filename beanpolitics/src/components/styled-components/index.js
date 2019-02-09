import styled from 'styled-components';

import {device} from './device';

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