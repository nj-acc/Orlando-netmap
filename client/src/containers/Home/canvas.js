import React from 'react'
import './canvas.scss'
import mapData from './map.json'


const Polygon = ({
    points
}) => {
    const poinstData = points.join(' ');

    return (
        <polygon className='polygon' points={poinstData} />
    )
}

function RenderSvg ({data}) {
    data = mapData

    return (
        <svg
            className='Svg'
            viewBox={`0 0 ${100} ${100}`}
            xmlns='http://www.w3.org/2000/svg'
        >
            {data.length > 0 && data.map((elt) => {
                return <Polygon points={elt.geometry.coordinates[0]} />
            })}
        </svg>
    )
}
export default RenderSvg