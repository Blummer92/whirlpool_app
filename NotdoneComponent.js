/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const NotdoneComponent = ({svgRef}) => (
    < svg
width = {33.666}
height = {33.666}
viewBox = "0 0 33.666 33.666"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a,.c{fill:none;}.b{opacity:0;clip-path:url(#a);}.c{stroke:#fff;stroke-width:6px;}"
    }
    < /style>
    < clipPath
id = "a" >
    < rect
className = "a"
width = {33.666}
height = {33.666}
/>
< /clipPath>
< /defs>
< g
className = "b" >
    < path
className = "c"
d = "M-194.555,1133.849l29.658,29.658"
transform = "translate(194.555 -1129.842)"
    / >
    < path
className = "c"
d = "M-194.555,1163.507l33.666-33.666"
transform = "translate(194.555 -1129.842)"
    / >
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < NotdoneComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
