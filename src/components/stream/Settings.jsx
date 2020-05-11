import React, { useState } from "react";
import { Header, Container, Button, Icon, Segment, Progress, Grid } from "semantic-ui-react";

function Settings(props) {
    const [ source, setSource ] = useState("user");
    const [ mute, setMute ] = useState([]);
    const [ isRecording, setIsRecording ] = useState(false);
    const [ volume, setVolume ] = useState(50);
    const [ mediaRecorder, setMediaRecorder ] = useState();
    const [ recordedChunks, setRecordedChunks ] = useState([]);

    function handleRecording() {
        if(isRecording) {
            handleStopRecorder();
            setIsRecording(null);
        } else {
            setIsRecording(Date.now());
            props.onRecord(Date.now());

            const stream = props.streams.user;
            const options = { mimeType: "video/webm; codecs=vp8,opus" };
            const recorder = new MediaRecorder(stream, options);

            recorder.ondataavailable = handleDataAvailable;
            recorder.start();
            setMediaRecorder(recorder);
        }
    }
    function handleDataAvailable(e) {
        console.log("data-available");
        if(e.data.size > 0) {
            console.log(recordedChunks);
            setRecordedChunks([
                ...recordedChunks,
                e.data
            ]);
        }
    }
    function handleStopRecorder() {    
        setIsRecording(null);
        props.onRecord(null);
        mediaRecorder.stop();
        download();
    }    
    function download() {
        var blob = new Blob(recordedChunks, {
        type: "video/webm"
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "test.webm";
        a.click();
        window.URL.revokeObjectURL(url);
    }

    function handleCapture() {
        // let imageCapture = new ImageCapture(props.streams.user.getVideoTracks()[ 0 ]);

        // imageCapture.takePhoto()
        //     .then(blob => createImageBitmap(blob))
        //     .then(imageBitmap => {
        //         console.log(imageBitmap);
        //     })
        //     .catch(error => console.log(error));
    }

    function adjustVolume(e) {
        if(e.buttons === 1) {
            const bb = e.currentTarget.getBoundingClientRect();
            const rate = (e.clientX - bb.left) / bb.width;
            const vol = ~~(rate * 100);
    
            setVolume(vol);
            props.onVolume(vol);
        }
    }

    function handleMute(target) {
        let mutesArr = mute;

        if(mutesArr.includes(target)) {
            mutesArr = mute.filter(m => m !== target);
        } else {
            mutesArr = [ ...mute, target ];
        }
        
        props.onMute(mutesArr);
        setMute(mutesArr);
    }

    if(!props.isActive) {
        return (
            <Container text>
                <Segment raised>
                    <Button.Group fluid size="massive">
                        <Button icon color="green" onClick={ e => props.onCall("video") }>
                            <Icon name="camera video" />
                        </Button>
                        <Button.Or />
                        <Button icon color="orange" onClick={ e => props.onCall("audio") }>
                            <Icon name="phone" />
                        </Button>
                        <Button.Or />
                        <Button icon color="blue" onClick={ e => props.onCall("display") }>
                            <Icon name="tv" />
                        </Button>
                    </Button.Group>
                </Segment>
            </Container>
        );
    }

    return (
        <Container text>
            <Segment raised>
                <Header size="tiny">Capture</Header>

                <Button.Group fluid icon>
                    <Button icon labelPosition="left" size="huge" disabled color={ isRecording ? "red" : null } onClick={ handleRecording }>
                        <Icon name="dot circle" />
                        { isRecording ? "Recording..." : "Record"  }
                    </Button>

                    <Button icon labelPosition="left" size="huge" disabled onClick={ handleCapture }>
                        <Icon name="camera retro" />
                        Capture
                    </Button>
                </Button.Group>
            </Segment>
            
            <Segment raised>
                <Header size="tiny">Source</Header>

                <Button.Group fluid icon>
                    <Button color={ source === "user" ? "blue" : null } size="huge" onClick={ e => setSource("user") }>
                        <Icon name="user circle outline" />
                    </Button>
                    <Button color={ source === "display" ? "blue" : null } size="huge" onClick={ e => setSource("display") }>
                        <Icon name="tv" />
                    </Button>
                    {/* <Button color={ source === "canvas" ? "green" : null } size="huge" onClick={ e => setSource("canvas") }>
                        <Icon name="image outline" />
                    </Button> */}
                    {/* <Button color={ source === "chat" ? "green" : null } size="huge" onClick={ e => setSource("chat") }>
                        <Icon name="comment outline" />
                    </Button> */}
                </Button.Group>
            </Segment>

            <Segment raised>
                <Header size="tiny">Mute</Header>

                <Button.Group fluid icon>
                    <Button color={ mute.includes("mic") ? "red" : null } size="huge" onClick={ e => handleMute("mic") }>
                        <Icon name="microphone" />
                    </Button>
                    <Button color={ mute.includes("camera") ? "red" : null } size="huge" onClick={ e => handleMute("camera") }>
                        <Icon name="video camera" />
                    </Button>
                    {/* <Button color={ mute.includes("display") ? "red" : null } size="huge" onClick={ e => handleMute("display") }>
                        <Icon name="tv" />
                    </Button>
                    <Button color={ mute.includes("canvas") ? "red" : null } size="huge" onClick={ e => handleMute("canvas") }>
                        <Icon name="image outline" />
                    </Button> */}
                </Button.Group>
            </Segment>

            <Segment raised>
                <Header size="tiny">Volume</Header>
                    
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={ 2 }>
                            <Button icon inverted color="grey" onClick={ e => {
                                props.onVolume(0);
                                setVolume(0);
                            }}>
                                <Icon name="volume off" color="grey" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={ 12 }>
                            <Progress percent={ volume } size="medium" color="blue" onMouseMove={ adjustVolume } onMouseDown={ adjustVolume } />
                        </Grid.Column>
                        <Grid.Column width={ 2 }>
                            <Button icon inverted color="grey" onClick={ e => {
                                props.onVolume(100);
                                setVolume(100);
                            }}>
                                <Icon name="volume up" color="grey" />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Button.Group fluid>
                    <Button icon onClick={ e => {
                        let vol = Math.min(Math.max(0, volume - 1), 100);

                        props.onVolume(vol);
                        setVolume(vol);
                    }}>
                        <Icon name="minus" />
                    </Button>
                    <Button icon onClick={ e => {
                        let vol = Math.min(Math.max(0, volume + 1), 100);

                        props.onVolume(vol);
                        setVolume(vol);
                    }}>
                        <Icon name="plus" />
                    </Button>
                </Button.Group>
            </Segment>

            <Segment raised>
                <Button icon fluid color="red" onClick={ props.onTerminate }>
                    End Stream
                </Button>
            </Segment>
        </Container>
    );
};

export default Settings;