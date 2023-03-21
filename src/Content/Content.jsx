import React, { useState, useEffect } from "react";

import "./Content.scss";

import Placeholder from "../Placeholder/Placeholder.jsx";

import lamp_icon from "../Images/lamp.svg";
import information_icon from "../Images/information.svg";
import briefcase_icon from "../Images/briefcase.svg";
import link_icon from "../Images/link.svg";
import education_icon from "../Images/education.svg";
import game_controller_icon from "../Images/game_controller.svg";

import html_icon from "../Images/html.svg";
import css_icon from "../Images/css.svg";
import javascript_icon from "../Images/javascript.svg";
import react_js_icon from "../Images/react_js.svg";
import sass_icon from "../Images/sass.svg";
import typescript_icon from "../Images/typescript.svg";
import jquery_icon from "../Images/jquery.svg";
import node_js_icon from "../Images/node_js.svg";

import github_icon from "../Images/github.svg";
import twitter_icon from "../Images/twitter.svg";
import linkedin_icon from "../Images/linkedin.svg";

import pi_icon from "../Images/pi.svg";
import music_icon from "../Images/music.svg";
import drawing_icon from "../Images/drawing.svg";
import book_icon from "../Images/book.svg";
import pencil_icon from "../Images/pencil.svg";

const iconSize = "2.5rem",
    lineThickNess = "0.2rem";

/** The content of the page. */
export default function Content() {
    return (
        <main>
            <AboutDisplayer />
            <EducationDisplayer />
            <ExperienceDisplayer />
            <SkillDisplayer />
            <LinkDisplayer />
            <HobbyAndInteresetDisplayer />
            <div id="floating-square" />
        </main>
    );
}

/** Displays information about me. */
function AboutDisplayer() {
    return (
        <aside>
            <Placeholder iconSize="2rem" URL={information_icon} alternative="information">
                <p>About Me</p>
                <p>
                    Hello, I'm Hashem, an ITE student that'd like
                    to <q>carve</q> his name at the world of technology!
                </p>
            </Placeholder>
        </aside>
    );
}

/** Displays the current education status. */
function EducationDisplayer() {
    return (
        <div id="education-displayer">
            <Placeholder iconSize={iconSize} URL={education_icon} alternative="education">
                <p>Education</p>
                <ul>
                    <li>I'm a Self-Taught Programmer, I've had to learn most of the things on my own.</li>
                    <li>Currently an ITE student at the Syrian Virtual University.</li>
                    <li>Also a student at the Applied Factul College at the Hamak University in Syria-Damascus.</li>
                </ul>
            </Placeholder>
        </div>
    );
}

/** Displays the all of the experiences. */
function ExperienceDisplayer() {
    return (
        <>
            <Placeholder iconSize={iconSize} URL={briefcase_icon} alternative="briefcase">
                <p>Experiences</p>
                <div className="placeholder-displayer">
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={70} URL={html_icon} alternative="html">HTML5</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={80} URL={css_icon} alternative="css">CSS3</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={85} URL={javascript_icon} alternative="javascript">JavaScript</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={70} URL={react_js_icon} alternative="react_js">ReactJS</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={75} URL={sass_icon} alternative="sass">SASS/SCSS</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={50} URL={typescript_icon} alternative="typescript">TypeScript</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={60} URL={jquery_icon} alternative="jquery">JQuery</Placeholder>
                    <Placeholder iconSize={iconSize} lineThickness={lineThickNess} linePercentage={10} URL={node_js_icon} alternative="node_js">NodeJS</Placeholder>
                </div>
            </Placeholder>
        </>
    );
}

/** Displays the all of the skills. */
function SkillDisplayer() {
    return (
        <>
            <Placeholder iconSize={iconSize} URL={lamp_icon} alternative="lamp">
                <p>Skills</p>
                <ul>
                    <li>
                        Programming Concepts, such as Datastructures, Algorithms,
                        Problem Solving, Design Patterns, and Object Oriented Programming.
                    </li>
                    <li>
                        Excellent background in Mathematics, to the point I've
                        once wrote a Maths libary consisting of <q>10K</q> lines of code.
                    </li>
                    <li>Fluency in English language, as in reading, writing, speech and communication.</li>
                    <li>Basic understanding of German language.</li>
                    <li>Softwares applications, such as Microsoft Office family of applications.</li>
                </ul>
            </Placeholder>
        </>
    );
}

/** Displays the all of the links. */
function LinkDisplayer() {
    return (
        <>
            <Placeholder iconSize={iconSize} URL={link_icon} alternative="link">
                <p>Links</p>
                <div id="link-displayer">
                    <Placeholder iconSize={iconSize} URL={github_icon} alternative="github">github.com/AshameTheDestroyer</Placeholder>
                    <Placeholder iconSize={iconSize} URL={twitter_icon} alternative="twitter">twitter.com/AshameDestroyer</Placeholder>
                    <Placeholder iconSize={iconSize} URL={linkedin_icon} alternative="linkedin">linkedin.com/in/AshameTheDestroyer</Placeholder>
                </div>
            </Placeholder>
        </>
    );
}

/** Displays the current hobbies and interests. */
function HobbyAndInteresetDisplayer() {
    return (
        <>
            <Placeholder iconSize={iconSize} URL={game_controller_icon} alternative="game_controller">
                <p>Hobbies & Interests</p>
                <div className="placeholder-displayer">
                    <Placeholder iconSize={iconSize} URL={pi_icon} alternative="pi">Mathematics</Placeholder>
                    <Placeholder iconSize={iconSize} URL={drawing_icon} alternative="drawing">Drawing</Placeholder>
                    <Placeholder iconSize={iconSize} URL={music_icon} alternative="music">Music</Placeholder>
                    <Placeholder iconSize={iconSize} URL={book_icon} alternative="book">Writing</Placeholder>
                    <Placeholder iconSize={iconSize} URL={pencil_icon} alternative="pencil">Reading</Placeholder>
                </div>
            </Placeholder>
        </>
    );
}