const express = require("express");

const {createProduct} = require('../../controllers/product_controller')
const createProductValidator = require("../../middlewares/product_middlewares");

const productRouter = express.Router();

productRouter.get("/", (req,res)=> {
   return res.json({ products :[] });
});

productRouter.post('/',createProductValidator,createProduct);

module.exports = productRouter;
