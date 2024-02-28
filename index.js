const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

const mongoUri = `mongodb://${IP_SERVER}:${PORT_DB}/minisquadbd`;

const connectMongoDB = async () => {
	try {
		mongoose.connect(mongoUri);

		console.log("La conexion a la base de datos es correcta.");

		app.listen(port, () => {
			console.log("######################");
			console.log("####### MS API #######");
			console.log("######################");
			console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
		});
	} catch (error) {
		throw error;
	}
};

module.exports = connectMongoDB();
