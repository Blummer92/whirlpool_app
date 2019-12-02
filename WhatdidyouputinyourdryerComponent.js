/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const WhatdidyouputinyourdryerComponent = ({svgRef}) => (
    < svg
width = {744}
height = {58}
viewBox = "0 0 744 58"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a{font-size:57px;font-family:FranklinGothicURW-Boo, FranklinGothic URW;letter-spacing:0em;}"
    }
    < /style>
    < /defs>
    < text
className = "a"
transform = "translate(372 39)" >
    < tspan
x = { - 371.631
}
y = {0} >
    {"What did you put in your dryer?"}
    < /tspan>
    < /text>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < WhatdidyouputinyourdryerComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
