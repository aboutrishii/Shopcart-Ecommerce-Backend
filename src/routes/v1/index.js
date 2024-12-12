const express = require('express');

const v1Router = express.Router();

const pingRouter = require('./PingRouter')
const productRouter = require('./ProductRouter')


v1Router.use('/ping',pingRouter);
v1Router.use('/products',productRouter)

module.exports = v1Router;