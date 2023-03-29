
const db = require('../../db')


let emailCustomerSignUp = async (req, res, next) => {
    let customer = await db.models.customer.findOne({email: req.body.email})
        .catch(err => {
            return res.status(500).json({message: 'Please try again later'})
        })
    if (customer) {
        return res.status(403).json({message: 'Customer by this email already exists'})
    }
    next();
}

let emailCustomer = async (req, res, next) => {
    let customer = await db.models.customer.findOne({email: req.body.email}).select('+password')
        .catch(err => {
            return res.status(500).json({message: 'Please try again later'})
        })
    if (!customer) {
        return res.status(403).json({message: 'Customer not found'})
    }
    req.customer = customer
    next();
}

let customerId = async (req, res, next) => {
    let customer = await db.models.customer.findOne({_id: req.customer_id}).select('+password')
        .catch(err => {
            return res.status(500).json({message: 'Please try again later'})
        })
    if (!customer) {
        return res.status(403).json({message: 'Customer not found'})
    }
    req.customer = customer
    next();
}

let businessId = async (req, res, next) => {
    let business = await db.models.business.findOne({business_id: req.params.id})
        .catch(err => {
            return res.status(500).json({message: 'Please try again later'})
        })
    if (business) {
        return res.status(403).json({message: 'Business is added'})
    }
    next();
}


module.exports = {
    emailCustomerSignUp,
    emailCustomer,
    customerId,
    businessId
};
