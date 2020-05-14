import React from "react";
import { Segment } from "semantic-ui-react";
import Thread from "./Thread";
import InputComment from "./InputComment";

function ChatView(props) {
    return (
        <Segment>
            <Thread posts={ props.posts } />
            <InputComment />
        </Segment>
    )
}

export default ChatView;