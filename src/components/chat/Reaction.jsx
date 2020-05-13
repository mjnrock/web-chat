import React from "react";
import { Label } from "semantic-ui-react";

function Reaction(props) {    
    return (
        <Label as="a" basic color="grey" onClick={ e => props.onReaction(props.emoji) }>
            <span className={ props.size || "medium-icon" } type="img" aria-label={ props.emoji }>{ props.emoji }</span>
            
            <Label.Detail className={ props.size || "medium-icon" }>{ props.qty }</Label.Detail>
        </Label>
    );
}

export default Reaction;