module.exports = (mongoose) => {
    let BusinessSchema = new mongoose.Schema({
        customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
        alias: String,
        categories: Array,
        coordinates: Object,
        display_phone: String,
        business_id: String,
        image_url: String,
        location: Object,
        name: String,
        phone: String,
        rating: Number,
        review_count: Number,
        transactions: Object,
        url: String,
    }, {versionKey: null, timestamps: true,});
    return mongoose.model('business', BusinessSchema);
};
