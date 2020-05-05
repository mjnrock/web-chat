import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";
import { AuthContext } from "./App";

function MenuBar() {
    const { state } = React.useContext(AuthContext);

    return (
        <>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" header>
                        <Icon name="home" /> Web Chat
                    </Menu.Item>

                    <Menu.Item>{ state.user }</Menu.Item>
                </Container>
            </Menu>
        </>
    );
}

export default MenuBar;