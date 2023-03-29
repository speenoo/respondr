const express = require('express');
const router = express.Router();

const controller = require('../controller/business');
const find = require('../middleware/find');
const verifyToken = require('../middleware/authentication');

router.get('/get/phone/:id', verifyToken, find.customerId, controller.get_businesses_phone);
router.get('/list', verifyToken, find.customerId, controller.get_businesses_list);
router.get('/get/:id', verifyToken, find.customerId, find.businessId, controller.get_businesses_id);
router.get('/review/:id', verifyToken, find.customerId, controller.get_businesses_review);

module.exports = router;
