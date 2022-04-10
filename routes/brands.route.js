const {Router} = require("express");
const {brandsController} = require("../controllers/brands.controller");

const router = Router();

router.get("/brands", brandsController.getBrands);

router.post("/brands", brandsController.postBrands);

router.delete("/brands/:id", brandsController.deleteBrands);

module.exports = router;