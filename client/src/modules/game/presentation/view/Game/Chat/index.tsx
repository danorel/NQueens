import React from "react";

import { ChatDivContainer, ChatTextArea } from "./styles";

interface ChatProps {
    value: string,
    onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const ChatView: React.FC<ChatProps> = (props: ChatProps) => {
    return (<React.Fragment>
        <ChatDivContainer>
            <ChatTextArea
                readOnly={false}
                value={props.value}
                onChange={props.onChange}/>
        </ChatDivContainer>
    </React.Fragment>);
}

export default ChatView;
