const express = require("express");
const router = express.Router();

//middelwares

//controller
const { upload, remove } = require("../controllers/cloudinary");

//routes

router.post("/uploadimages", upload);
router.post("/removeimage", remove);

//exports
module.exports = router;
