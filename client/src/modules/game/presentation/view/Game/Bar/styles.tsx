import styled from "styled-components";

export const ButtonRegime = styled.button`
    width: 150px;
    height: 40px;
    padding: 5px 20px;
    font-size: 16px;
    font-family: "Monospaced", sans-serif;
    border-radius: 12px;
    color: #000f00;
    background-color: #2397ff;
    border: aliceblue 1px solid;
`

export const ButtonNext = styled.button`
    margin-left: 5px;
    width: 120px;
    height: 40px;
    padding: 5px 20px;
    font-size: 16px;
    font-family: "Monospaced", sans-serif;
    border-radius: 12px;
    color: #000f00;
    background-color: #ee3773;
    border: aliceblue 1px solid;
`

export const ButtonNextDisabled = styled(ButtonNext)`
    background-color: #b5b5b5;
    &:hover {
        cursor: not-allowed;
        pointer-events: none;
    }
`;

export const ButtonContinue = styled(ButtonNext)`
    color: #000f00;
    background-color: #87e287;
`