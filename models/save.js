const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const currentUser = "Johnny";

const saveSchema = new Schema({
    enemieskilled: {type: Number}
});

const Save = mongoose.model(currentUser, saveSchema);

module.exports = Save;