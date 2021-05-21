const express = require("express");

const router = express.Router();

const {
  create,
  read,
  readOne,
  update,
  remove,
} = require("../controllers/project");

router.post("/project", create);
router.get("/project", read);
router.get("/project/:slug", readOne);
router.put("/project/:slug", update);
router.delete("/project/:slug", remove);

module.exports = router;
