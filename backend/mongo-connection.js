const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/kurs";
mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("errror", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("We are connected to mongoDB");
});
