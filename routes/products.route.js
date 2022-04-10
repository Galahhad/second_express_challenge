const {Router} = require("express");
const {productsController} = require("../controllers/products.controller");

const router = Router();

router.get("/products", productsController.getNews);

router.get("/products/:id", productsController.getNewsRoute);

router.post("/products", productsController.postNews);

router.delete("/products/:id", productsController.deleteNews);

module.exports = router;