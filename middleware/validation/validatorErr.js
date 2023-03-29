const {validationResult} = require('express-validator');

const db = require('../../db')


let validator_err = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return res.status(400).json({message: errors.array()[0].msg});
    } else {
        next()
    }
}

module.exports = validator_err;
