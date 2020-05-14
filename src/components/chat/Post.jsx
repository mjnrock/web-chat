import React from "react";
import { Comment } from "semantic-ui-react";

import ReactionBar from "./ReactionBar";

const reactionPlaceholders = [
    { emoji: "❤️", qty: 14 },
    { emoji: "😀", qty: 9 },
    { emoji: "👍🏼", qty: 63 },
    { emoji: "🐾", qty: 54 },
];

function Post(props) {
    return (
        <Comment>
            <Comment.Avatar as="a" src="/assets/pusheen.png" />
            <Comment.Content>
                <Comment.Author as="a">{ props.post.author }</Comment.Author>

                <Comment.Metadata>
                    <span>{ props.post.timestamp }</span>
                </Comment.Metadata>

                {
                    (false) // test if props.message is an image
                    ? (
                        null    //TODO Render the image response
                    )
                    : (
                        <Comment.Text>{ props.post.message }</Comment.Text>
                    )
                }

                <Comment.Actions>
                    <ReactionBar postId={ props.post.id } style={{ marginTop: 10 }} reactions={ reactionPlaceholders } />
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    );
}

export default Post;