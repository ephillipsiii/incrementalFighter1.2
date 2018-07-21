const db = require("../models");

module.exports = {
    save: function (req, res) {
        console.log("save ping");
        db.Save
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch (err => res.status(422).json(err));
    },
    load: function (req, res) {
        console.log("load ping");
        db.Save
        .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

