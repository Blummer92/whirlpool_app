/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const RectangleComponent = ({svgRef}) => (
    < svg
width = {1920}
height = {1080}
viewBox = "0 0 1920 1080"
ref = {svgRef} >
    < defs >
    < style >
    {
        ".a{fill:rgba(255,255,255,0.52);stroke:#707070;}.b{stroke:none;}.c{fill:none;}"
    }
    < /style>
    < /defs>
    < g
className = "a" >
    < rect
className = "b"
width = {1920}
height = {1080}
/>
< rect
className = "c"
x = {0.5}
y = {0.5}
width = {1919}
height = {1079}
/>
< /g>
< /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < RectangleComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
