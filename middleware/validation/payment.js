const {body} = require('express-validator');

module.exports.create_payment = [

    body('customer_id')
        .trim()
        .not().isEmpty().withMessage('Customer id is required.'),

    body('price')
        .trim()
        .not().isEmpty().withMessage('Price is required.'),

    body('currency')
        .trim()
        .not().isEmpty().withMessage('Currency is required.'),

    body('business_id')
        .trim()
        .not().isEmpty().withMessage('Business id is required.'),

]
