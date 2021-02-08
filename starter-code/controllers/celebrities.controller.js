const Celebrity = require("../models/celebrity")

const Celebrity = require('../models/celebrity')


module.exports.List = (req, res, next) => {
    Celebrity.find()
        .then((celebrities) => {
            res.render('celebrities/list', { celebrities: celebrities })
        })
}