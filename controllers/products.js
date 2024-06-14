const Products = require("../models/products");
const image = require("../services/image");

function createProduct(req, res) {
	const products = new Products(req.body);

	try {
		if (req.files.miniature) {
			const imagePath = image.getFilePath(req.files.miniature);
			products.miniature = imagePath;
		}

		products.save((err, productStored) => {
			if (err) {
				res.status(400).send({ message: "Error al crear el producto." });
			} else {
				res.status(201).send(productStored);
			}
		});
	} catch (error) {
		throw error;
	}
}

function getProducts(req, res) {
	const { page = 1, limit = 10 } = req.query;
	const options = {
		page: parseInt(page),
		limit: parseInt(limit),
	};

	Products.paginate({}, options, (err, products) => {
		if (err) {
			res.status(400).send({ message: "Error al obtener los productos." });
		} else {
			res.status(200).send(products);
		}
	});
}

function updateProduct(req, res) {
	const { id } = req.params;
	const productData = req.body;

	if (req.files.miniature) {
		console.log(req.files.miniature);
		const imagePath = image.getFilePath(req.files.miniature);
		productData.miniature = imagePath;
	}

	Products.findByIdAndUpdate({ _id: id }, productData, (err) => {
		if (err) {
			res.status(400).send({ message: "Error al actualizar el producto." });
		} else {
			res.status(200).send({ message: "Producto actualizado correctamente." });
		}
	});
}

function deleteProduct(req, res) {
	const { id } = req.params;

	Products.findByIdAndDelete(id, (err) => {
		if (err) {
			res.status(400).send({ message: "Error al eliminar el producto." });
		} else {
			res.status(200).send({ message: "Producto eliminado correctamente." });
		}
	});
}

module.exports = {
	createProduct,
	getProducts,
	updateProduct,
	deleteProduct,
};
