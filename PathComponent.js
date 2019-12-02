/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const PathComponent = ({svgRef}) => (
    < svg
width = {52.508}
height = {48.548}
viewBox = "0 0 52.508 48.548"
ref = {svgRef} >
    < defs >
    < style > {".a{fill:none;stroke:#000;stroke-width:4px;}"} < /style>
    < /defs>
    < path
className = "a"
d = "M10.931,0s21.345,35.928,0,43.261-5.873-21.217,0-20.442"
transform = "matrix(0.616, -0.788, 0.788, 0.616, 2.049, 18.348)"
    / >
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < PathComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
