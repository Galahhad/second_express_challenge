module.exports.productsController = {
    getNews: (req, res) => {
        res.json("Products");
    },
    getNewsRoute: (req, res) => {
        res.json(`Products ${req.params.id}`);
    },
    postNews: (req, res) => {
        res.json("Post Products");
    },
    deleteNews: (req, res) => {
        res.json(`Products ${req.params.id} has been deleted`);
    }
}