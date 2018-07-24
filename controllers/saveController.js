const Login = require("../client/src/authentication/social-config");

let id = 'no id'
        if ((Login.facebookConfig.appId === 'YOUR FB APP ID GOES HERE') && (Login.googleConfig.client_id === 'YOUR GOOGLE APP ID GOES HERE')) {
            id = 'no id'
        }
        else if (Login.facebookConfig.appId === 'YOUR FB APP ID GOES HERE') {
            id = Login.googleConfig.client_id
        }
        else if (Login.googleConfig.client_id === 'YOUR GOOGLE APP ID GOES HERE') {
            id = Login.facebookConfig.appId;
        };

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
        .findOne({name: id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

