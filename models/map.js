const { json } = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const MapSchema = mongoose.Schema({
    NeighName: {
        type: String,
        required: true
    },
    NeighID: {
        type: String,
        required: true
    },
    avg_d_kbps: {
        type: String,
        required: true
    },
    avg_u_kbps: {
        type: String,
        required: true
    },
    avg_lat_ms: {
        type: String,
        required: true
    },
    devices: {
        type: String,
        required: true
    },
    tests: {
        type: String,
        required: true,
    },
    quadkey: {
        type: String,
        required: true
    },
    geometry: {
        type: Object,
        required: true
    }
});
const Map = mongoose.model('Map', MapSchema);

module.exports = Map;
