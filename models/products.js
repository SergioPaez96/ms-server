const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = mongoose.Schema({
	title: String,
	miniature: String,
	description: String,
	price: Number,
	score: Number,
});

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Products", ProductSchema);
