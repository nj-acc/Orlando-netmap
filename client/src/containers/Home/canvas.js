import React from 'react'
import './canvas.scss'
import SvgData from './svg'



function RenderSvg () {
    
    return (
        <svg  version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg" pointerEvents="none" className="leaflet-zoom-animated" width="708" height="720" viewBox="35 -104 708 720" style={{transform: "translate3d(35px, -104px, 0px)"}}>
            <g>
                {
                    SvgData.paths.map((elt, index) => {
                        // elt.content.key = index
                        return elt.content
                    })
                }
            </g>
        </svg>
    )
}
export default RenderSvg