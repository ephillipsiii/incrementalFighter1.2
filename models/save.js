const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    name: {type: String, required: true},
    damagepersecond: {type: Number},
    enemieskilled: {type: Number}
});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;