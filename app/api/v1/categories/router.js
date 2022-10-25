const express = require("express");
const router = express();

// import controller categories
const { create, index, find, update, remove } = require("./controller");

// pasangkan route endpoint dengan method `index, create, find, dan sebagainya`
router.get("/categories", index);
router.post("/categories", create);
router.get("/categories/:id", find);
router.put("/categories/:id", update);
router.delete("/categories/:id", remove);

module.exports = router;