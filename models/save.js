const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    currentPage: {type: String},
    enemyHealth: {type: Number},
    damagePerSecond: {type: Number},
    enemiesKilled: {type: Number},
    actions: []
});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;