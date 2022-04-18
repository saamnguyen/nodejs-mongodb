require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const subscribersRouter = require("./routes/subscribers");
const app = express();
const PORT = 3000;

const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL);

db.on("error", (error) => {
	console.error(error);
});
db.once("open", () => {
	console.log("Connection");
});

app.use(express.json());

app.use("/subscribers", subscribersRouter);

app.listen(PORT, () => {
	console.log(PORT);
});
