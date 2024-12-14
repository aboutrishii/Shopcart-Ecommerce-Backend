const express = require("express");
const bodyParser = require('body-parser')
const responseTime = require('response-time')
const { PORT } = require("./config/server_config");

const { configPingRoutes } = require("./routes/v1/ping_router");
const ApiRouter = require("./routes/api_router");
const app = express();

app.use("/api", ApiRouter);

app.use(responseTime());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
  console.log(`Server for Shopcart is Up: ${PORT}`);
});
