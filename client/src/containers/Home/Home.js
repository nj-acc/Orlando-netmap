import React, { useState } from 'react';
import Chart from "react-google-charts";

import './Home.css';

const Home = () => {
    const [data,setData] = useState([])
    const [download,setDownload] = useState(0)
    const [upload,setUpload] = useState(0)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center top-card">
                            Download
                        </div>
                        <div className="top-card-text text-center">
                            {download} Mbps
                        </div>                        
                    </div>
                    <div className="col-md-3">
                        <div className="text-center top-card">
                            Upload
                        </div>
                        <div className="top-card-text text-center">
                            {upload} Mbps
                        </div>                        
                    </div>
                    <div className="col-md-3">
                        <div className="text-center top-card">
                            Latency
                        </div>
                        <div className="">
                        <Chart
                            width={'100%'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                            ]}
                            options={{
                                // Just add this option
                                pieHole: 0.4,
                                legend: 'none',

                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                        </div>                        
                    </div>
                    <div className="col-md-3">
                        <div className="text-center top-card">
                            Jitter
                        </div>
                        <div className="">
                        <Chart
                            width={'100%'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                            ]}
                            options={{
                                // Just add this option
                                pieHole: 0.4,
                                legend: 'none',

                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                        </div>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'dogs'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                    options={{
                        hAxis: {
                        title: 'Time',
                        },
                        vAxis: {
                        title: 'Popularity',
                        },
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    </div>
                    <div className="col-md-6">
                        map
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
