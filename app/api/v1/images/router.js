const express = require("express");
const router = express();

// import images controller
const { create } = require("./controller");

// import middlewares multer
const upload = require("../../../middlewares/multer");

// pasangkan route endpoint dengan method `index, create, find, dsb`
router.post("/images", upload.single("avatar"), create);

module.exports = router;