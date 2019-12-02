/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const PlatterComponent = ({svgRef}) => (
    < svg
width = {359}
height = {56}
viewBox = "0 0 359 56"
ref = {svgRef} >
    < defs >
    < style > {".a{fill:#ffd908;opacity:0;}"} < /style>
    < /defs>
    < rect
className = "a"
width = {359}
height = {56}
rx = {14}
/>
< /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < PlatterComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
