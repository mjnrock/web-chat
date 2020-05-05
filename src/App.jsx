import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Menu from "./Menu";
import Routes from "./routes/package";


export const AuthContext = React.createContext();
const initialState = {
    isAuthenticated: false,
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            // localStorage.setItem("user", JSON.stringify(action.payload.user));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case "LOGOUT":
            // localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

function App() {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            <Menu />

            <Router>
                <Switch>
                    <Route path="/login">
                        <Routes.Login />
                    </Route>
                    <Route path="/">
                        <Routes.Home />
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;