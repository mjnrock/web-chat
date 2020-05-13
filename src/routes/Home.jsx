import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import StreamView from "./../components/stream/StreamView";
import ChatView from "./../components/chat/ChatView";

export default function Home() {
    return (
        <Fragment>
            <StreamView />
            <ChatView />
        </Fragment>
    );
}