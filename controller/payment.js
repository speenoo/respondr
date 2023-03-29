const stripe = require('stripe')(process.env.STRIPE_SK_KEY);

const db = require('../db')

module.exports = {

    pay: async (req, res) => {
        try {

        } catch (e) {

            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },

}
