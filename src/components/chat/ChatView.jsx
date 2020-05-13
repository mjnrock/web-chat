import React from "react";
import { Segment } from "semantic-ui-react";
import Thread from "./Thread";
import InputComment from "./InputComment";

const posts = [
    {
        id: 1,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod."
    },
    {
        id: 2,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod.",
        children: [
            {
                id: 4,
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod."
            },
            {
                id: 5,
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod.",
                children: [
                    {
                        id: 6,
                        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod."
                    },
                    {
                        id: 7,
                        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod."
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod.",
        children: [
            {
                id: 8,
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod."
            },
            {
                id: 9,
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel nesciunt nisi deserunt repudiandae officiis, expedita animi labore aut voluptas atque dolorem veritatis. Iusto earum architecto perspiciatis facilis magni quod."
            },
        ]
    },
];

function ChatView(props) {
    return (
        <Segment>
            <Thread posts={ posts } />
            <InputComment />
        </Segment>
    )
}

export default ChatView;