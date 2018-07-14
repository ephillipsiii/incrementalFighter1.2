const db = require("../models");
const GameContainer = require("../client/src/components/GameContainer");

const data = GameContainer.state;

// STILL NEED TO GET THESE TO WORK BY ACCESSING STATE IN GAMECONTAINER

module.export = {
    save: function (data, res) {
        db.Save
            .remove({})
            .then(() => db.Save.collection.insert(data))
            .catch(err => res.status(422).json(err));
    },
    load: function(req, res) {
        db.Save
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    useFirstConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 1}})
    },
    useSecondConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 2}})
    },
    useThirdConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 3}})
    },
    useFourthConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 4}})
        .then()
    }
};

