import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    serverUrl
} from '../../config';
import CustomCanvas from "./canvas"
// import Background from "../../assets/background.png"

const Map = () => {
    let [mapData, setMapData] = useState([])

    const getData = function () {
        axios
            .get(`${serverUrl}/api/map`)
            .then((response) => {
                console.log("response", response);
                setMapData(response.data)
            })
            .catch((err) => {
                console.error(err);
            });
    }
    useEffect(() => {
        getData();
    },[])

    return (
        <div>
            <CustomCanvas data={mapData}/>
        </div>
    )
}

export default Map;
