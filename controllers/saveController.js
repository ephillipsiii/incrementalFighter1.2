const db = require("../models");


module.export = {
    save: function (req, res) {
        db.Save
            .remove({})
            .then(() => db.Save.collection.insert(req))
            .catch(err => res.status(422).json(err));
    },
    load: function(req, res) {
        db.Save
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

