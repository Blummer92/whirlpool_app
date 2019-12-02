/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const PipesComponent = ({svgRef}) => (
    < svg
width = {44.593}
height = {45.696}
viewBox = "0 0 44.593 45.696"
ref = {svgRef} >
    < defs >
    < style > {".a{fill:none;}.b{clip-path:url(#a);}.c{fill:#fcfcfc;}"} < /style>
    < clipPath
id = "a" >
    < rect
className = "a"
width = {44.593}
height = {45.696}
/>
< /clipPath>
< /defs>
< g
className = "b" >
    < g
transform = "translate(-26.525 -20.829)" >
    < g
transform = "translate(26.525 20.829)" >
    < path
className = "c"
d = "M44.889,22.834a.388.388,0,0,1-.414.387c-1.521-.1-2.838-.153-4.024-.153-4.466,0-7.24.726-9,2.355-2.52,2.276-3.355,6.319-2.98,14.422a.388.388,0,0,1-.387.406H26.525V43.2H41.361V40.251H39.71a.388.388,0,0,1-.386-.352c-.253-2.729.019-4.464.856-5.46a3.291,3.291,0,0,1,2.412-1.079,11.962,11.962,0,0,1,1.909-.094.388.388,0,0,1,.388.388v2.1h2.86V20.829h-2.86Z"
transform = "translate(-26.525 -20.829)"
    / >
    < rect
className = "c"
width = {9.518}
height = {22.544}
transform = "translate(2.518 23.152)"
    / >
    < rect
className = "c"
width = {22.56}
height = {9.424}
transform = "translate(22.033 2.789)"
    / >
    < /g>
    < /g>
    < /g>
    < /svg>
)
;

const ForwardRef = React.forwardRef((props, ref) => (
    < PipesComponent
svgRef = {ref}
{...
    props
}
/>
))
;
export default ForwardRef;
