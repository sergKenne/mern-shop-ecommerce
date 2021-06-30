const getProducts = (req, res) => {
    res.status(200).json({
        succes: true,
        message: 'get all products in request ....',
    });
};

module.exports ={
    getProducts
}