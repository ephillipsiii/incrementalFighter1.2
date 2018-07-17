const db = require("../models");

module.exports = {
    save: function (req, res) {
        db.Save
            .remove({})
            .create(req.body)
            .then(() => db.Save.collection.insert(req))
            .catch(err => res.status(422).json(err));
    },
    load: function(req, res) {
        db.Save
        .then(() => db.Save.collection.find({"index": 1}))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

