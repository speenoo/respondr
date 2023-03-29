module.exports = (mongoose) => {
    let ReviewSchema = new mongoose.Schema({
        business_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
        business_yelp_id: String,
        reviews: Array,
        total: Number0,
    }, {versionKey: null, timestamps: true,});
    return mongoose.model('review', ReviewSchema);
};
