module.exports = (mongoose) => {
    let PaymentSchema = new mongoose.Schema({
        customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
        business_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'business'}],
        price: Number,
        currency: String,
    }, {versionKey: null, timestamps: true,});

    return mongoose.model('Payment', PaymentSchema);
};
