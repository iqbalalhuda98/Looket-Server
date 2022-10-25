const express = require("express");
const router = express();

// import controller talents
const { create, index, find, update, remove } = require("./controller");

// pasangkan route endpoint dengan method
router.get("/talents", index);
router.get("/talents/:id", find);
router.put("/talents/:id", update);
router.delete("/talents/:id", remove);
router.post("/talents", create);

module.exports = router;