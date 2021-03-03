import React from 'react'
import './canvas.scss'
import {paths as map_paths } from './svg'



function RenderSvg () {

    return (
        <svg  version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" pointer-events="none" class="leaflet-zoom-animated" width="708" height="720" viewBox="35 -104 708 720" style="transform: translate3d(35px, -104px, 0px);">
            <g>
                {
                    map_paths.map((elt, index) => {
                        elt.content.key = index
                        return elt.content
                    })
                }
            </g>
        </svg>
    )
}
export default RenderSvg