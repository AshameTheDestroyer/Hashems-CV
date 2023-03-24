import React, { useState, useEffect } from "react";

import "./Header.scss";

import Placeholder from "../Placeholder/Placeholder.jsx";

import message_icon from "../Images/message.svg";
import phone_icon from "../Images/phone.svg";
import location_icon from "../Images/location.svg";

/** The header of the page. */
export default function Header() {
    return (
        <header>
            <MainDisplayer />
            <InformationDisplayer />
            <span id="floating-square" />
        </header>
    );
}

/** Displays the main information. */
function MainDisplayer() {
    return (
        <div id="main-displayer">
            <div id="profile-picture" />
            <div>
                <h1 className="break-bottom">
                    <p>Hashem</p>
                    <q>Wannous</q>
                </h1>
                <p>Frontend Developer</p>
            </div>
        </div>
    );
}

/** Displays more further information. */
function InformationDisplayer() {
    return (
        <div id="information-displayer" className="break-left">
            <Placeholder URL={message_icon} alternative="message">
                hashemwnoos@gmail.com
            </Placeholder>

            <Placeholder URL={phone_icon} alternative="phone">
                <div id="phone-displayer">
                    <p>+963</p>
                    <p>947</p>
                    <p>233</p>
                    <p>978</p>
                </div>
            </Placeholder>

            <Placeholder URL={location_icon} alternative="location">
                Syria-Damascus
            </Placeholder>
        </div>
    );
}