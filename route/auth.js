const express = require('express');
const router = express.Router();

const controller = require('../controller/auth');
const find = require('../middleware/find');
const validator = require('../middleware/validation/auth');
const validator_err = require('../middleware/validation/validatorErr');

router.post('/signup', find.emailCustomerSignUp, validator.signup, validator_err,  controller.signup);
router.post('/signin', validator.signin, validator_err,  find.emailCustomer, controller.signin);

module.exports = router;
