const db = require("../models");

module.exports = {
    save: function (req, res) {
        db.Save
            .update({email: req.body.email}, req.body, { upsert: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    load: function (req, res) {
        console.log(req.query.q);
        db.Save
            .findOne({ email: req.query.q })
            .then(dbModel => res.json(dbModel))
            .then(console.log("load ping"))
            .catch(err => res.status(422).json(err));
    }
};

