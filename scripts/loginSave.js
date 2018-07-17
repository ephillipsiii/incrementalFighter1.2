const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/incDatabase"
);

const loginSave = {
        name: "Player",
        enemyHealth: 100,
        damagePerSecond: 1,
        enemiesKilled: 0,
        actions:[]
    };



db.Save
    .remove({})
    .then(() => db.Save.collection.insertMany(loginSave))
    .then(data => {
        console.log("--Start Progress Saved!--");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });