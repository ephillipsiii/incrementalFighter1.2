const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/incDatabase"
);

const testPerson = [
    {
        name: "Ed",
        damagepersecond: 1,
        enemieskilled: 1
    },
    {
        name: "Matt",
        damagepersecond: 2,
        enemieskilled: 2
    }
];

db.Save
    .remove({})
    .then(() => db.Save.collection.insertMany(testPerson))
    .then(data => {
        console.log("--All consumable data inserted!--");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });