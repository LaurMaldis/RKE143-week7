const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json');

router.get('/', (req, res) => {
    res.status(200).json({message: 'Got rke143?'});
});

router.post('/', (req, res) => {
    if(req.body.name !== 'rke' || req.body.code !== "143") {
        res.status(200).json({message: 'Invalid credentials'}); 
    } else {
        res.status(200).json({rke143Data});
    }
});


module.exports = router;
