import React, { useState, useEffect } from "react";

import "./Placeholder.scss";

/** An element with a breif icon that describes it.
 * @param {Object} properties The properties of the element.
 * @param {Object} properties.children The children of the element that'll be displayed next to the icon.
 * @param {String} properties.URL The link of the icon that'll be displayed.
 * @param {String} properties.iconSize The size of the icon.
 * @param {String} properties.colour The colour of the icon.
 * @param {String} properties.lineThickness The thickness of the line.
 * @param {String} properties.lineColour The colour of the line.
 * @param {Number} properties.linePercentage The percentage of the length of the line.
 * @param {String} properties.alternative The alternative title that'll appear if the icon isn't loaded.
 * @returns A new Placeholder Element.
 */
export default function Placeholder({
    children,
    URL,
    iconSize = "5rem",
    colour = "transparent",
    lineThickness = "0",
    lineColour = "white",
    linePercentage = 0,
    alternative,
}) {
    return (
        <div className="placeholder">
            <div className="icon" style={{
                "--background-colour": colour,
                "--icon-size": iconSize,
                "--apply-margin": Number(lineThickness != "0"),
            }}>
                <img src={URL} alt={alternative} />

                <div className="round-progress-bar" style={{
                    "--line-thickness": lineThickness,
                    "--line-colour": lineColour,
                }}>
                    <svg>
                        <circle cx={iconSize} cy={iconSize} r={iconSize} />
                        <circle cx={iconSize} cy={iconSize} r={iconSize} style={{
                            "--percentage": linePercentage,
                        }} />
                    </svg>
                </div>
            </div>
            {lineThickness != "0" && <div>{linePercentage}%</div>}
            <div>{children}</div>
        </div>
    );
}