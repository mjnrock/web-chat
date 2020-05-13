import React from "react";
import { Comment } from "semantic-ui-react";

import Post from "./Post";

function Thread(props) {
    return (
        <Comment.Group threaded collapsed={ props.collapsed }>
            {
                (props.posts || []).map(post => (
                    <Post key={ post.id } postId={ post.id } message={ post.message } children={ post.children } />
                ))
            }
        </Comment.Group>
    )
}

export default Thread;