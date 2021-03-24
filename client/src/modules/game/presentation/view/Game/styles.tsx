import styled from "styled-components";

import jpgBackgroundImage from "../../../../../public/images/jpg/background-matrix-simple.jpg";

export const H3Title = styled.h3`
    font-size: 32px;
    margin: 0 0 15px;
    font-style: normal;
    color: #69ff79;
`;

export const ButtonRegime = styled.button`
    width: 150px;
    height: 40px;
    padding: 5px 20px;
    font-size: 16px;
    font-family: "Comic Sans MS", sans-serif;
    border-radius: 12px;
    color: #000f00;
    background-color: #69ff79;
`

export const ButtonNext = styled.button`
    margin-left: 5px;
    width: 120px;
    height: 40px;
    padding: 5px 20px;
    font-size: 16px;
    font-family: "Comic Sans MS", sans-serif;
    border-radius: 12px;
    color: #000f00;
    background-color: #69ff79;
`

export const DivCentrifyContainer = styled.div`
    top: 50%;
    position: absolute;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
`

export const DivExpandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const DivBackgroundContainer = styled.div`
    position: fixed;
    // Preserve aspet ratio
    min-width: 100%;
    min-height: 100%;
    // Background resizing options
    background: url(${jpgBackgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
`;