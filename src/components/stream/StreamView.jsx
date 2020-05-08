import React, { useState } from "react";
import { Rail, Button, Segment, Placeholder, Icon, Dimmer } from "semantic-ui-react";
import Settings from "./Settings";

function StreamView() {
    const [ isRecording, setIsRecording ] = useState(false);
    const [ isSettingsVisible, setIsSettingsVisible ] = useState(false);

    function handleRecording() {
        setIsRecording(!isRecording);
    }

    return (
        // <Dimmer.Dimmable as={ Segment } dimmed={ isSettingsVisible } onMouseEnter={ e => setIsSettingsVisible(true) } onMouseLeave={ e => setIsSettingsVisible(false) }>
        <Dimmer.Dimmable as={ Segment } dimmed={ isSettingsVisible }>
            <Placeholder fluid>
                <Placeholder.Image rectangular />
            </Placeholder>
            
            <Rail attached internal position="right">
                <Button.Group icon floated="right">
                    {
                        isRecording ? (
                            <Button icon labelPosition="left" size="huge" color={ isRecording ? "red" : null } onClick={ handleRecording }>
                                <Icon name="dot circle" />
                                { isRecording ? "00:00" : "Record"  }
                            </Button>
                        ) : null
                    }

                    <Button icon onClick={ e => setIsSettingsVisible(!isSettingsVisible) }>
                        <Icon name="settings" />
                    </Button>
                </Button.Group>
            </Rail>


            <Dimmer active={ isSettingsVisible } onClickOutside={ e => setIsSettingsVisible(false) }>
                <Settings onRecord={ setIsRecording } />
            </Dimmer>
        </Dimmer.Dimmable>
    );
}

export default StreamView;