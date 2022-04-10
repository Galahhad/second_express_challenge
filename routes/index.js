const {Router} = require("express");

const router = Router();

router.use(require("./products.route"));
router.use(require("./brands.route"));

module.exports = router;