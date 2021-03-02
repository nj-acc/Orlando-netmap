const { json } = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const MapSchema = mongoose.Schema({
    NeighName: {
        type: String,
        required: true
    },
    NeighID: {
        type: Number,
        required: true
    },
    avg_d_kbps: {
        type: Number,
        required: true
    },
    avg_u_kbps: {
        type: Number,
        required: true
    },
    avg_lat_ms: {
        type: Number,
        required: true
    },
    devices: {
        type: Number,
        required: true
    },
    tests: {
        type: Number,
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
