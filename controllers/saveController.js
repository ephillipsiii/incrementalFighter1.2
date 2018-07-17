const db = require("../models");
// const GameContainer = require("../client/src/components/GameContainer");

// const data = GameContainer.state;

// STILL NEED TO GET THESE TO WORK BY ACCESSING STATE IN GAMECONTAINER

module.exports = {
    save: function (data, res) {
        db.Save
            .remove({})
            .create(req.body)
            .then(() => db.Save.collection.insert(data))
            .catch(err => res.status(422).json(err));
    },
    load: function(req, res) {
        db.Save
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

