/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const SymbolComponent = ({svgRef}) => (
    < svg
width = {235}
height = {75}
viewBox = "0 0 235 75"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a{fill:none;}.b{clip-path:url(#a);}.c{fill:#ff8567;}.d{fill:#fff;font-size:37px;font-family:FranklinGothicURW-Dem, FranklinGothic URW;letter-spacing:0em;}"
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
x = { - 23.82
}
y = {0} >
    {"NO"}
    < /tspan>
    < /text>
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < SymbolComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
