const customersModel = require('../models').Customer;

const createCustomer = (req, res) => {
  let newCustomer = {
      name:    req.body.name,
      creditCard: req.body.creditcard
  };
  customersModel.create(newCustomer).then(
      customer => res.json(customer)
  );
}

const getAllCustomers = (req, res) => {
  customersModel.findAll().then(
      customer => res.json(customer)
  );
}

module.exports = {
  createCustomer,
  getAllCustomers
}