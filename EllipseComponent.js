/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const EllipseComponent = ({svgRef}) => (
    < svg
width = {91}
height = {91}
viewBox = "0 0 91 91"
ref = {svgRef} >
    < defs >
    < style > {".a{fill:#c6a000;}"} < /style>
    < /defs>
    < circle
className = "a"
cx = {45.5}
cy = {45.5}
r = {45.5}
/>
< /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < EllipseComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
