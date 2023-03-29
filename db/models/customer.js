module.exports = (mongoose) => {
    let CustomerSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        phone_number: String,
        user_name: String,
        amount_location: Number,
        password: { type: String, select: false },
        organization_name: String,
        address_including_country: String,
        code: String,
        payment_method: String
    }, {versionKey: null, timestamps: true,});

    return mongoose.model('Customer', CustomerSchema);
};
