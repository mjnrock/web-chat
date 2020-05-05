import React from "react";
import { Grid } from "semantic-ui-react";
import StreamView from "./StreamView";

const StreamGrid = () => (
    <Grid celled="internally" columns="equal">
        <Grid.Row>
            <Grid.Column>
                <StreamView />
            </Grid.Column>

            <Grid.Column>
                <StreamView />
            </Grid.Column>

            <Grid.Column>
                <StreamView />
            </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
            <Grid.Column>
                <StreamView />
            </Grid.Column>

            <Grid.Column>
                <StreamView />
            </Grid.Column>

            <Grid.Column>
                <StreamView />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default StreamGrid;