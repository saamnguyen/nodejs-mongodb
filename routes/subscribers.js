const express = require("express");
const router = express.Router();

//Get all
router.get("/", (req, res) => {
	res.send("Hello GET");
});

router.get("/:id", (req, res) => {
	res.send(req.params.id);
});

router.post("/", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
