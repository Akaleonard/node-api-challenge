const express = require("express");
const projectModelRouter = require("./data/helpers/projectModel-Router");

const server = express();

server.use(express.json());
server.use("api/projectmodel", projectModelRouter);

module.exports = server;
