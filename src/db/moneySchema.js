const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moneySchema = new Schema({
    id: String,
    name: String,
    categoryName: String,
    date: String,
    price: String,
    description: String,
    type: String,
})


const moneyModel = mongoose.model("money", moneySchema);
module.exports = moneyModel;