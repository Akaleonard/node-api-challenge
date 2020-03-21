const express = require("express");
const cors = require('cors');
const projectModelRouter = require("./data/helpers/projectModel-Router");

const server = express();

server.use(cors());

server.use(express.json());
server.use("/api/projectmodel", projectModelRouter);

module.exports = server;
