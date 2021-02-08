const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

//celebrities

router.get('/celebrities', celebritiesController.list)
module.exports = router;