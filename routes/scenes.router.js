// scenes.router.js
const express = require("express");
const {listScenes, listSceneById} = require("../controllers/scenes.controllers.js");
var router=express.Router();
// localhost:3000/scenes
router.get("/id=:id", listSceneById);
router.get("/",listScenes);

module.exports = router;