import React from "react";

import { ChatDivContainer, ChatTextArea } from "./styles";

interface ChatProps {
    value: string,
}

const ChatView: React.FC<ChatProps> = (props: ChatProps) => {

    // Checkout the chat textarea bottom location of text. Navigate to bottom if overflow.
    if (document.getElementById('chat-textarea')) {
        const chat = document.getElementById('chat-textarea');
        chat!.scrollTop = chat!.scrollHeight;
    }

    return (<React.Fragment>
        <ChatDivContainer>
            <ChatTextArea
                id="chat-textarea"
                readOnly={true}
                value={props.value}/>
        </ChatDivContainer>
    </React.Fragment>);
}

export default ChatView;
