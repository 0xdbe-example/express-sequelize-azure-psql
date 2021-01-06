var express = require('express');
var router = express.Router();
const controllerCustomer = require('../controllers/customers');

router.get('/', controllerCustomer.getAllCustomers);
router.post('/', controllerCustomer.createCustomer);

module.exports = router;