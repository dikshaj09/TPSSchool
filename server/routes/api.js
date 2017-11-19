const express = require('express');

const router = express.Router();

// Models
var school = require('../models/schoolInfo');

/* GET api listing. */
router.get('/schoolInfo', (req, res,next) => {
  school.find(function(err,schoolInfo){
    res.json(schoolInfo);
  })
  // res.send('Retrieving school Info');
});


// Routes

module.exports = router;