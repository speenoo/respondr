const fs = require('fs');
const path = require('path');
let Mongoose = require('mongoose');
const models = {};
Mongoose.set("strictQuery", false);

const mongoose = Mongoose.connect(process.env.DB_URI, {useUnifiedTopology: true ,  useNewUrlParser: true,}, (err)=> {
    if(err){
        return  console.log(err);
    }
    console.log('connect')
});

fs.readdirSync(path.join(__dirname, 'models'))
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, 'models', file))(Mongoose);
        let db_name = file.replace('.js', '');
        models[db_name] = model;
    });


module.exports = {
    models,
    mongoose,
    Mongoose
};
