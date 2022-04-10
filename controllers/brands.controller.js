module.exports.brandsController = {
    getBrands: (req, res) => {
        res.json("Brands");
    },
    postBrands: (req, res) => {
        res.json("Post Brands");
    },
    deleteBrands: (req, res) => {
        res.json(`Brands ${req.params.id} has been deleted`);
    }
}