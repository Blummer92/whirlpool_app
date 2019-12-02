/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const YesbuttonComponent = ({svgRef}) => (
    < svg
width = {235}
height = {75}
viewBox = "0 0 235 75"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a{fill:none;}.b{clip-path:url(#a);}.c{fill:#00c600;}.d{fill:#fff;font-size:37px;font-family:FranklinGothicURW-Dem, FranklinGothic URW;letter-spacing:0em;}"
    }
    < /style>
    < clipPath
id = "a" >
    < rect
className = "a"
width = {235}
height = {75}
/>
< /clipPath>
< /defs>
< g
className = "b" >
    < rect
className = "c"
width = {235}
height = {75}
/>
< text
className = "d"
transform = "translate(118 52)" >
    < tspan
x = { - 31.194
}
y = {0} >
    {"YES"}
    < /tspan>
    < /text>
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < YesbuttonComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
