const router = require("express").Router();
const saveRoutes = require("./saves");

// Book routes
router.use("/saves", saveRoutes);

module.exports = router;