const express = require("express");

const router = express.Router();

const {
  create,
  read,
  readOne,
  update,
  remove,
} = require("../controllers/experience");

router.post("/experience", create);
router.get("/experience", read);
router.get("/experience/:slug", readOne);
router.put("/experience/:slug", update);
router.delete("/experience/:slug", remove);

module.exports = router;
