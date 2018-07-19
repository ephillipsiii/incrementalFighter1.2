import axios from "axios";

export default {
    loadGame: function() {
        return axios.get("/api/saves");
    },
    saveGame: function(saveData) {
        return axios.post("/api/saves", saveData);
    },
    firstConsumable: function() {
        return axios.get("/api/consumables")
    },
    secondConsumable: function() {
        return axios.get("/api/consumables")
    },
    thirdConsumable: function() {
        return axios.get("/api/consumables")
    },
    fourthConsumable: function() {
        return axios.get("/api/consumables")
    }
};