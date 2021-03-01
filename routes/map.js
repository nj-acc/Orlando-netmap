const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Map = require('../models/map.js');
const config = require('../config');
const data = require('../data.json');
const router = express.Router();

function saveEl(els,index) {
    if(els.length<=index){
        console.log('dfsdfsdfsdfdsfdsfsdf')
        return 'end';
    }
    const el = els[index]
    console.log(index,els.length)
    const map = new Map({
        NeighID: el.properties.NeighID,
        NeighName: el.properties.NeighName,
        avg_d_kbps: el.properties.avg_d_kbps,
        avg_u_kbps: el.properties.avg_u_kbps,
        avg_lat_ms: el.properties.avg_lat_ms,
        devices: el.properties.devices,
        quadkey: el.properties.quadkey,
        tests: el.properties.tests,
        geometry:el.geometry
    })

    Map.find({NeighID: el.properties.NeighID}).exec()
    .then(rs=>{
        if(rs.length){
            console.log(rs.length)
            saveEl(els,index+1)
        }else{
            console.log('dfdsfs')
            map.save(function(err){
                if(err) return err
                saveEl(els,index+1)
            });
        }
    })
}

router.get('/importdata_save',async(req,res) => {
    saveEl(data,0)
    res.json({success:'dfs'})
})

router.get('/', async (req, res) => {
    Map.find().exec()
        .then(maps =>{
            res.json(maps)
        })
});
router.post('/',async(req,res) => {
    console.log(req.body.properties.NeighName)
    const map = new Map({
        NeighID: req.body.properties.NeighID,
        NeighName: req.body.properties.NeighName,
        avg_d_kbps: req.body.properties.avg_d_kbps,
        avg_u_kbps: req.body.properties.avg_u_kbps,
        avg_lat_ms: req.body.properties.avg_lat_ms,
        devices: req.body.properties.devices,
        quadkey: req.body.properties.quadkey,
        tests: req.body.properties.tests,
        geometry:req.body.geometry
    })

    Map.find({NeighID: req.body.properties.NeighID}).exec()
    .then(rs=>{
        if(rs.length){
            res.json({status:'found data'});
        }else{
            map.save(function(err){
                if(err) return err
                res.json({ status: 'success' });
            });
        }
    })
    .catch(err=>{
        res.json(err)
    })
    
})

module.exports = router;