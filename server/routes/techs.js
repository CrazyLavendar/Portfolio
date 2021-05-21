const express = require("express");

const router = express.Router();

//controller
const { create, list } = require("../controllers/techs");

//routes
router.post("/tech", create);
router.get("/tech", list);

// router.get("/tech/:slug", read);

// router.put("/tech/:slug", update);
// router.delete("/tech/:slug", remove);

module.exports = router;
