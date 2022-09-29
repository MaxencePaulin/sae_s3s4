// owners.router.js
const express = require("express");
const {listOwners, listOwnerById} = require("../controllers/owners.controllers.js");
var router=express.Router();
// localhost:3000/owners
router.get("/id=:id", listOwnerById);
router.get("/page=:page",listOwners);
router.use("/", (req, res) => {
    res.redirect("/owners/page=1");
});

module.exports = router;