import axios from "axios";

export default {
    loadGame: function() {
        return axios.get("/api/saves");
    },
    saveGame: function() {
        return axios.post("/api/saves");
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