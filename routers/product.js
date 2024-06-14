const express = require("express");
const multiparty = require("connect-multiparty");
const ProductController = require("../controllers/products");
const md_auth = require("../middlewares/authenticated");
const md_upload = multiparty({ uploadDir: "./uploads/products" });

const api = express.Router();

api.post(
	"/product",
	[md_auth.asureAuth],
	[md_upload],
	ProductController.createProduct,
);
api.get("/product", ProductController.getProducts);
api.patch(
	"/product/:id",
	[md_auth.asureAuth],
	[md_upload],
	ProductController.updateProduct,
);
api.delete(
	"/product/:id",
	[md_auth.asureAuth],
	[md_upload],
	ProductController.deleteProduct,
);

module.exports = api;
