import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import Settings from "./../components/stream/Settings";
import StreamView from "./../components/stream/StreamView";

export default function Home() {
    return (
        <Fragment>
            <Settings />
            <StreamView />
        </Fragment>
    );
}