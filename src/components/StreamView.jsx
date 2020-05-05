import React from "react";
import { Placeholder, Segment } from "semantic-ui-react";

const StreamView = () => (
    <Segment raised>
        <Placeholder>
            <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
        </Placeholder>
    </Segment>
)

export default StreamView;