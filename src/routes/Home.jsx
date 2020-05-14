import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import StreamView from "./../components/stream/StreamView";
import ChatView from "./../components/chat/ChatView";
import { Button } from "semantic-ui-react";

export default function Home() {
    //! This was tested and WORKS, so long as CORS is enabled at API level
    function testPostCall() {
        fetch("http://localhost:3001/message", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({
                "id": Date.now(),
                "message": `This is a REACT test message at ${ Date.now() }`
            })
        });
    }
    
    return (
        <Fragment>
            <StreamView />
            <ChatView />
            <Button onClick={ testPostCall }>POST Call</Button>
        </Fragment>
    );
}