import React, { Fragment, useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import StreamView from "./../components/stream/StreamView";
import ChatView from "./../components/chat/ChatView";
import { Button } from "semantic-ui-react";

export default function Home() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/feed")
            .then(response => response.json())
            .then(data => {
                console.log(123);
                setPosts(data);
            })
            .catch(console.log);
    }, []);

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
                "author": "Matt",
                "message": `This is a REACT test message at ${ Date.now() }`,
                "timestamp": Date.now()
            })
        });
    }
    
    return (
        <Fragment>
            <StreamView />
            <ChatView posts={ posts } />
            <Button onClick={ testPostCall }>POST Call</Button>
        </Fragment>
    );
}