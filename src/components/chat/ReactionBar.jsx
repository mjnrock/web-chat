import React, { useContext, useState } from "react";

import Reaction from "./Reaction";
import EmojiPicker from "./EmojiPicker";

function ReactionBar(props) {
    const [ reactions, setReactions ] = useState([]);
    // const { dispatch } = useContext(Context);
    const reacts = [
        ...(props.reactions || []),
        ...(reactions || []),
    ];
    
    function onReaction(emoji) {
        // dispatch({
        //     type: "REACTION",
        //     data: {
        //         emoji,
        //         postId: props.postId
        //     }
        // });
        
        console.log(emoji);

        let qty = 1;
        setReactions([
            ...reactions,
            {
                emoji: emoji,
                qty: qty
            }
        ]);
    }

    return (
        <div style={ props.style || {} }>
            {
                props.showPicker !== false ? (
                    <EmojiPicker onSelect={ onReaction }/>
                ) : null
            }
            {
                reacts.map(rp => (
                    <Reaction onReaction={ onReaction } key={ rp.emoji } emoji={ rp.emoji } qty={ rp.qty } size={ props.size } />
                ))
            }
        </div>
    );
}

export default ReactionBar;