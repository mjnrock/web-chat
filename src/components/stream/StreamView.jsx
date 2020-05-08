import React, { useState } from "react";
import { Rail, Button, Segment, Icon, Dimmer } from "semantic-ui-react";
import Settings from "./Settings";

import { getUserMedia } from "./../../lib/UserMedia";

function StreamView() {
    const userMediaRef = React.createRef();
    const [ userMedia, setUserMedia ] = useState();

    const [ isRecording, setIsRecording ] = useState(false);
    const [ isSettingsVisible, setIsSettingsVisible ] = useState(false);

    function handleRecording() {
        setIsRecording(!isRecording);
    }

    async function onGetUserMedia() {
        const stream = await getUserMedia();
        
        userMediaRef.current.srcObject = stream;
        setUserMedia(stream);
    }

    return (
        // <Dimmer.Dimmable as={ Segment } dimmed={ isSettingsVisible } onMouseEnter={ e => setIsSettingsVisible(true) } onMouseLeave={ e => setIsSettingsVisible(false) }>
        <Dimmer.Dimmable as={ Segment } dimmed={ isSettingsVisible }>
            <Button icon onClick={ onGetUserMedia }>
                <Icon name="video camera" />
            </Button>
            <video ref={ userMediaRef } autoPlay={ true } />
            
            {/* <Menu inverted secondary text>
                <Menu.Item>asdf</Menu.Item>
                <Menu.Item>asdf</Menu.Item>
                <Menu.Item>asdf</Menu.Item>
            </Menu> */}
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