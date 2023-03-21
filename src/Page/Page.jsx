import React, { useState, useEffect } from "react";

import "./Page.scss";

import Header from "../Header/Header.jsx";
import Content from "../Content/Content.jsx";

/** The main page that displays pretty much everything. */
export default function Page() {
    return (
        <>
            <Header />
            <Content />
        </>
    );
}