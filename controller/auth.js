const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../db')

signToken = (customer) => {
    return jwt.sign({
        sub: customer.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, process.env.JWT_SECRET);
}

function generateCode() {
    let length = 5,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

module.exports = {
    signup: async (req, res) => {
        try {
            const {first_name, last_name, email, password, phone_number, user_name, amount_location, organization_name, address_including_country, payment_method } = req.body
            let code = generateCode()
            let hashedPassword = bcrypt.hashSync(password, 8);
            let customer = new db.models.customer({
                first_name,
                last_name,
                payment_method,
                email,
                password: hashedPassword,
                phone_number,
                user_name,
                amount_location,
                organization_name,
                address_including_country,
                code,
            })
            customer.save()
            res.status(201).json({message: 'Customer is created'})
        } catch (e) {
            console.log(e, 'erthgter');
            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },

    signin: async (req, res) => {
        try {
            const { password } = req.body
            let passwordIsValid = bcrypt.compareSync(password, req.customer.password);
            if (!passwordIsValid) {
                return res.status(401).send('Invalid email or password');
            }
            const token = signToken(req.customer);
            res.status(200).json({
                token: token,
                id: req.customer.id,
                last_name: req.customer.last_name,
                first_name: req.customer.first_name,
                phone: req.customer.phone,
                user_name: req.customer.user_name,
                email: req.customer.email,
                amount_location: req.customer.amount_location,
                organization_name: req.customer.organization_name,
                address_including_country: req.customer.address_including_country
            });
        } catch (e) {
            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },
}
