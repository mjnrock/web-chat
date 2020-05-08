import React, { useState } from "react";
import { Rail, Button, Segment, Placeholder, Icon } from "semantic-ui-react";

function StreamView() {
    const [ isRecording, setIsRecording ] = useState(false);

    function handleRecording() {
        setIsRecording(!isRecording);
    }

    return (
        <Segment raised >
            <Placeholder fluid>
                <Placeholder.Image rectangular/>
            </Placeholder>

            <Rail attached internal position="right">
                <Button.Group icon floated="right">
                    <Button icon labelPosition="left" color={ isRecording ? "red" : null } onClick={ handleRecording }>
                        <Icon name="dot circle" />
                        Record
                    </Button>

                    <Button icon labelPosition="left">
                        <Icon name="camera retro" />
                        Capture
                    </Button>
                </Button.Group>
            </Rail>
        </Segment>
    );
}

export default StreamView;