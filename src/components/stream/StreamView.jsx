import React, { useState, useEffect } from "react";
import { Rail, Button, Segment, Icon, Dimmer } from "semantic-ui-react";
import Settings from "./Settings";

import { getUserMedia } from "./../../lib/UserMedia";
import { getDisplayMedia } from "./../../lib/DisplayMedia";

function StreamView() {
    const videoRef = React.createRef();
    const [ userMedia, setUserMedia ] = useState();
    const [ displayMedia, setDisplayMedia ] = useState();
    const [ volume, setVolume ] = useState(50);

    const [ isRecording, setIsRecording ] = useState(false);
    const [ isSettingsVisible, setIsSettingsVisible ] = useState(false);

    useEffect(() => {
        if(!videoRef.current.srcObject) {
            let stream;
            if(userMedia && userMedia.active) {
                stream = userMedia;
            }
            if(displayMedia && displayMedia.active) {
                stream = displayMedia;
            }

            videoRef.current.srcObject = stream;
        }
        videoRef.current.volume = volume / 100;

    }, [ userMedia, displayMedia, volume ]);

    function handleRecording() {
        setIsRecording(!isRecording);
    }

    function onGetUserMedia(constraints) {
        getUserMedia(constraints)
            .then(stream => {
                setUserMedia(stream);

                return stream;
            });
    }

    function onGetDisplayMedia(constraints) {
        getDisplayMedia(constraints)
            .then(stream => {
                setDisplayMedia(stream);

                return stream;
            });
    }

    function handleCall(type) {
        if(type === "video") {
            onGetUserMedia({
                video: {
                    width: { ideal: 1920 },
                    height: { ideal: 1080 },
                },
                audio: true,
            });
        } else if(type === "audio") {
            onGetUserMedia({
                video: false,
                audio: true,
            });
        } else if(type === "display") {
            onGetDisplayMedia({                
                video: {
                    width: { ideal: 1920 },
                    height: { ideal: 1080 },
                },
            });
        }
    }

    function handleTermination() {
        if(userMedia && userMedia.active) {
            userMedia.getTracks().forEach(track => track.stop());
        }
        
        if(displayMedia && displayMedia.active) {
            displayMedia.getTracks().forEach(track => track.stop());
        }
    }

    function handleMute(muteArr) {
        userMedia.getTracks().forEach(track => {
            if(track.kind === "audio") {
                if(muteArr.includes("mic")) {
                    track.enabled = false;
                } else {
                    track.enabled = true;
                }
            }
            if(track.kind === "video") {
                if(muteArr.includes("camera")) {
                    track.enabled = false;
                } else {
                    track.enabled = true;
                }
            }
        });
    }

    return (
        <Dimmer.Dimmable as={ Segment } dimmed={ isSettingsVisible } onMouseEnter={ e => setIsSettingsVisible(true) } onMouseLeave={ e => setIsSettingsVisible(false) }>
            <video ref={ videoRef } autoPlay={ true }/>
            
            <Rail attached internal position="right">
                <Button.Group icon floated="right">
                    {
                        isRecording ? (
                            <Button icon labelPosition="left" size="huge" color={ isRecording ? "red" : null } onClick={ handleRecording }>
                                <Icon name="dot circle" />
                                { isRecording ? "Recording..." : "Record"  }
                            </Button>
                        ) : null
                    }
                </Button.Group>
            </Rail>


            <Dimmer active={ isSettingsVisible } onClickOutside={ e => setIsSettingsVisible(false) }>
                <Settings
                    isActive={ (userMedia && userMedia.active) || (displayMedia && displayMedia.active) }
                    streams={{ user: userMedia, display: displayMedia }}
                    onRecord={ setIsRecording }
                    onVolume={ vol => setVolume(Math.min(Math.max(0, vol), 100)) }
                    onMute={ handleMute }
                    onTerminate={ handleTermination }
                    onCall={ handleCall }
                />
            </Dimmer>
        </Dimmer.Dimmable>
    );
}

export default StreamView;