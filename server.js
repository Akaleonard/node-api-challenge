const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors');
const projectModelRouter = require("./data/helpers/projectModel-Router");
const actionModelRouter = require('./data/helpers/actionModel-Router');

const server = express();

server.use(helmet())
server.use(morgan('dev'))
server.use(cors());

server.use(express.json());
server.use("/api/projects", projectModelRouter);
server.use("/api/actions", actionModelRouter)

module.exports = server;
