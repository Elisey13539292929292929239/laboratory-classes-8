const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/add", cartController.addProductToCart);
router.get("/", cartController.getCartView);


module.exports = router;
