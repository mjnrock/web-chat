import React from "react";
import { Comment, Segment, Header, Icon } from "semantic-ui-react";

import Post from "./Post";

function Thread(props) {
    if(Array.isArray(props.posts) && props.posts.length) {
        return (
            <Comment.Group threaded collapsed={ props.collapsed }>
                {
                    (props.posts || []).map(post => (
                        <Post key={ post.id } post={ post } />
                    ))
                }
            </Comment.Group>
        );
    }

    return (
        <Segment>
            <Header as="h3" icon textAlign="center">
                <Icon name="spinner" loading/>
                <br />
                <Header.Content>Loading Messages...</Header.Content>
            </Header>
        </Segment>
    );
}

export default Thread;