const {body} = require('express-validator');

module.exports.signup = [

    body('first_name')
        .trim()
        .not().isEmpty().withMessage('First Name is required.'),

    body('last_name')
        .trim()
        .not().isEmpty().withMessage('Last name is required.'),

    body('user_name')
        .trim()
        .not().isEmpty().withMessage('User name is required.'),

    body('amount_location')
        .trim()
        .not().isEmpty().withMessage('Amount Location is required.'),

    body('phone_number')
        .trim()
        .not().isEmpty().withMessage('Phone number is required.'),

    body('organization_name')
        .trim()
        .not().isEmpty().withMessage('Organization name is required.'),

    body('address_including_country')
        .trim()
        .not().isEmpty().withMessage('Address including country is required.'),

    body('email')
        .trim()
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),

    body('password')
        .trim()
        .not().isEmpty().withMessage('Password is required')
        .isLength({min: 8}).withMessage('Cannot be less than 8 characters'),


]

module.exports.signin = [

    body('email')
        .trim()
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),

    body('password')
        .trim()
        .not().isEmpty().withMessage('Password is required')
        .isLength({min: 8}).withMessage('Cannot be less than 8 characters'),

]

module.exports.signinGoogle = [

    body('google_id')
        .trim()
        .not().isEmpty().withMessage('Google id is required.'),

    body('photo')
        .trim()
        .not().isEmpty().withMessage('Photo is required.'),

    body('first_name')
        .trim()
        .not().isEmpty().withMessage('First Nnme is required.'),

    body('last_name')
        .trim()
        .not().isEmpty().withMessage('Last name is required.'),

    body('email')
        .trim()
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),
]

module.exports.forgot_email = [

    body('email')
        .trim()
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),
]

module.exports.forgot_password = [

    body('email')
        .trim()
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),

    body('code')
        .trim()
        .not().isEmpty().withMessage('Code is required')
        .isString().withMessage('Code must be string.'),

    body('password')
        .trim()
        .not().isEmpty().withMessage('Password is required')
        .isLength({min: 8}).withMessage('Cannot be less than 8 characters'),
]


