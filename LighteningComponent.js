/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const LighteningComponent = ({svgRef}) => (
    < svg
width = {19.665}
height = {44.938}
viewBox = "0 0 19.665 44.938"
ref = {svgRef} >
    < defs >
    < style > {".a{fill:none;}.b{clip-path:url(#a);}.c{fill:#fff;}"} < /style>
    < clipPath
id = "a" >
    < rect
className = "a"
width = {19.665}
height = {44.938}
/>
< /clipPath>
< /defs>
< g
className = "b" >
    < path
className = "c"
d = "M49.973,23.568H41.362L45.76,5H36.554L30.308,31.37h8.611l-4.4,18.568Z"
transform = "translate(-30.308 -5)"
    / >
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < LighteningComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
