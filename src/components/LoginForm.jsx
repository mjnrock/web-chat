/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { AuthContext } from "./../App";

function LoginForm() {
    const { dispatch } = React.useContext(AuthContext);
    const [ user, setUser ] = React.useState();

    return (
        <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="blue" textAlign="center">
                    <Icon name="computer" /> Web Chat
                </Header>

                <Form size="large">
                    <Segment stacked>
                        <Form.Input fluid icon="user blue" iconPosition="left" placeholder="Username" onChange={ e => setUser(e.target.value) } />

                        <Button color="blue" fluid size="large" as={ Link } to="/" onClick={ e => dispatch({ type: "LOGIN", payload: user }) }>
                            Connect
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default LoginForm;