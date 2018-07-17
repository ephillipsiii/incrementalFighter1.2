const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const currentUser = "Johnny";

const saveSchema = new Schema({
    currentPage: {type: String},
    enemyHealth: {type: Number},
    damagePerSecond: {type: Number},
    enemiesKilled: {type: Number},
    actions: []
});

const Save = mongoose.model(currentUser, saveSchema);

module.exports = Save;