// owners.router.js
const express = require("express");
const {listOwners, listOwnerById} = require("../controllers/owners.controllers.js");
var router=express.Router();
// localhost:3000/owners
router.get("/id=:id", listOwnerById);
router.get("/",listOwners);

module.exports = router;