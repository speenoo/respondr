const sdk = require('api')('@yelp-developers/v1.0#deudoolf6o9f51');
const axios = require('axios');

const db = require('../db')

module.exports = {
    get_businesses_phone: async (req, res) => {
        try {
            if (!req.params.id) {
                return res.status(408).json({message: 'Phone number required'})
            }
            sdk.auth(process.env.YELP_TOKEN);
            let response = await sdk.v3_business_phone_search({phone: req.params.id})
            res.status(200).json({message: response.data.businesses})
        } catch (e) {
            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },

    get_businesses_list: async (req, res) => {
        try {

          let business = await db.models.business.find({customer_id: req.customer_id})
            res.status(200).json({business: business})
        } catch (e) {
            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },

    get_businesses_id: async (req, res) => {
        try {
            if (!req.params.id) {
                return res.status(408).json({message: 'Business id required'})
            }
            sdk.auth(process.env.YELP_TOKEN);
            let response_business = await sdk.v3_business_info({business_id_or_alias: req.params.id})
            let response_business_reviews = await axios.get(`https://api.yelp.com/v3/businesses/${req.params.id}/reviews?sort_by=yelp_sort`, {
                headers: {
                    'Authorization': process.env.YELP_TOKEN
                }
            })
            let business_save = await new db.models.business({
                customer_id: req.customer_id,
                alias: response_business.data.alias,
                categories: response_business.data.categories,
                coordinates: response_business.data.coordinates,
                display_phone: response_business.data.display_phone,
                business_id: response_business.data.id,
                image_url: response_business.data.image_url,
                location: response_business.data.location,
                name: response_business.data.name,
                phone: response_business.data.phone,
                rating: response_business.data.rating,
                review_count: response_business.data.review_count,
                transactions: response_business.data.transactions,
                url: response_business.data.url,
            }).save()
            new db.models.review({
                business_yelp_id: req.params.id,
                business_id: business_save._id,
                reviews: response_business_reviews.data.reviews,
                total: response_business_reviews.data.total,
            }).save()
            res.status(200).json({message: 'Business is add'})
        } catch (e) {
            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },


    get_businesses_review: async (req, res) => {
        try {
            let review = await db.models.review.findOne({business_yelp_id: req.params.id})
            res.status(200).json({review})
        } catch (e) {
            res.status(500).json({message: 'Please try again later', error: e?.message})
        }
    },


}
