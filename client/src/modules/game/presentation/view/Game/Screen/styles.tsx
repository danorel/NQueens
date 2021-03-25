import styled from "styled-components";

const ChatDivContainer = styled.div`
    height: 300px;
    width: 100%;
`;

const ChatTextArea = styled.textarea`
    height: 100%;
    width: 100%;
    padding: 15px;
    color: aliceblue;
    border: aliceblue 5px solid;
    border-radius: 10px;
    background-color: #151515;
`;

export { ChatDivContainer, ChatTextArea };