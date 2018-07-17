const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    name: {type: String},
    enemyHealth: {type: Number},
    damagePerSecond: {type: Number},
    enemiesKilled: {type: Number},
    actions: [],
});

const Save = mongoose.model("Saves", saveSchema);

module.exports = Save;