/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const CheckmarkComponent = ({svgRef}) => (
    < svg
width = {37.004}
height = {25.328}
viewBox = "0 0 37.004 25.328"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a,.c{fill:none;}.b{opacity:0;clip-path:url(#a);}.c{stroke:#fff;stroke-linecap:round;stroke-width:6px;}"
    }
    < /style>
    < clipPath
id = "a" >
    < rect
className = "a"
width = {37.004}
height = {25.328}
/>
< /clipPath>
< /defs>
< g
className = "b" >
    < path
className = "c"
d = "M-194.555,1147.5l11.677,11.677,25.328-25.328"
transform = "translate(194.555 -1133.849)"
    / >
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < CheckmarkComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
