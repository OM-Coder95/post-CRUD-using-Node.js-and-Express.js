const express = require("express");
const cors = require("cors");
const router = require("./router/postRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/post", router);

module.exports = app;