/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const LabelComponent = ({svgRef}) => (
    < svg
width = {355}
height = {24}
viewBox = "0 0 355 24"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a{fill:#fff;font-size:20px;font-family:Helvetica;letter-spacing:0.001em;opacity:0;}"
    }
    < /style>
    < /defs>
    < text
className = "a" >
    < tspan
x = {106.264}
y = {15} >
    {"Where is my lint"}
    < /tspan>
    < /text>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < LabelComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
