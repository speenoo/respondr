const {body} = require('express-validator');

module.exports.get_business = [

    body('phone')
        .trim()
        .not().isEmpty().withMessage('Phone id is required.'),

]
