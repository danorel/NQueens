import React from "react";

import { ChatDivContainer, ChatTextArea } from "./styles";

interface ChatProps {
    value: string,
}

const ChatView: React.FC<ChatProps> = (props: ChatProps) => {
    return (<React.Fragment>
        <ChatDivContainer>
            <ChatTextArea
                readOnly={true}
                value={props.value}/>
        </ChatDivContainer>
    </React.Fragment>);
}

export default ChatView;
