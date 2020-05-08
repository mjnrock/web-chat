import React, { useState } from "react";
import { Header, Container, Button, Icon, Segment, Progress } from "semantic-ui-react";

function Settings() {
    const [ source, setSource ] = useState("user");
    const [ mute, setMute ] = useState([]);

    const [ volume, setVolume ] = useState(50);

    function adjustVolume(e) {
        if(e.buttons === 1) {
            const bb = e.currentTarget.getBoundingClientRect();
            const rate = (e.clientX - bb.left) / bb.width;
    
            setVolume(~~(rate * 100));
        }
    }

    function handleMute(target) {
        if(mute.includes(target)) {
            setMute(mute.filter(m => m !== target));
        } else {
            setMute([ ...mute, target ]);
        }
    }

    return (
        <Container text>
            <Segment raised>
                <Header size="tiny">Source</Header>

                <Button.Group fluid icon>
                    <Button color={ source === "user" ? "green" : null } size="huge" onClick={ e => setSource("user") }>
                        <Icon name="user circle outline" />
                    </Button>
                    <Button color={ source === "display" ? "green" : null } size="huge" onClick={ e => setSource("display") }>
                        <Icon name="tv" />
                    </Button>
                    <Button color={ source === "canvas" ? "green" : null } size="huge" onClick={ e => setSource("canvas") }>
                        <Icon name="image outline" />
                    </Button>
                    <Button color={ source === "chat" ? "green" : null } size="huge" onClick={ e => setSource("chat") }>
                        <Icon name="comment outline" />
                    </Button>
                </Button.Group>
            </Segment>

            <Segment raised>
                <Header size="tiny">Mute</Header>

                <Button.Group fluid icon>
                    <Button color={ mute.includes("mic") ? "red" : null } size="huge" onClick={ e => handleMute("mic") }>
                        <Icon name="microphone" />
                    </Button>
                    <Button color={ mute.includes("video") ? "red" : null } size="huge" onClick={ e => handleMute("video") }>
                        <Icon name="video camera" />
                    </Button>
                    <Button color={ mute.includes("display") ? "red" : null } size="huge" onClick={ e => handleMute("display") }>
                        <Icon name="tv" />
                    </Button>
                    <Button color={ mute.includes("canvas") ? "red" : null } size="huge" onClick={ e => handleMute("canvas") }>
                        <Icon name="image outline" />
                    </Button>
                </Button.Group>
            </Segment>

            <Segment raised>
                <Header size="tiny">Volume</Header>
                    
                <Progress progress percent={ volume } size="medium" color="green" onMouseMove={ adjustVolume } onMouseDown={ adjustVolume } />
                <Button.Group fluid icon>
                    <Button onClick={ e => setVolume(Math.max(0, volume - 1)) }>
                        <Icon name="minus" />
                    </Button>
                    <Button onClick={ e => setVolume(Math.min(100, volume + 1)) }>
                        <Icon name="plus" />
                    </Button>
                </Button.Group>
            </Segment>
        </Container>
    );
};

export default Settings;