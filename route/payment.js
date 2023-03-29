const express = require('express');
const router = express.Router();

const controller = require('../controller/payment');
const find = require('../middleware/find');
const verifyToken = require('../middleware/authentication');
const validator = require('../middleware/validation/payment');
const validator_err = require('../middleware/validation/validatorErr');

router.post('/pay', verifyToken, find.customerId, validator.create_payment, validator_err, controller.pay);

module.exports = router;
