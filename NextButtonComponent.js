/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const NextButtonComponent = ({svgRef}) => (
    < svg
width = {451}
height = {75}
viewBox = "0 0 451 75"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a{fill:none;}.b{clip-path:url(#a);}.c{fill:#989898;stroke:#707070;}.d{fill:#fff;font-size:24px;font-family:FranklinGothicURW-Boo, FranklinGothic URW;letter-spacing:0em;}.e{stroke:none;}"
    }
    < /style>
    < clipPath
id = "a" >
    < rect
className = "a"
width = {451}
height = {75}
/>
< /clipPath>
< /defs>
< g
className = "b" >
    < g
className = "c" >
    < rect
className = "e"
width = {451}
height = {75}
/>
< rect
className = "a"
x = {0.5}
y = {0.5}
width = {450}
height = {74}
/>
< /g>
< text
className = "d"
transform = "translate(226 42)" >
    < tspan
x = { - 38.757
}
y = {0} >
    {"I fixed it"}
    < /tspan>
    < /text>
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < NextButtonComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
