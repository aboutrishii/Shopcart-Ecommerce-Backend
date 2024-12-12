const express = require("express");

const { PORT } = require("./config/serverConfig");

const { configPingRoutes } = require("./routes/v1/PingRouter");
const ApiRouter = require('./routes/apiRouter')
const app = express();

app.use("/api",ApiRouter);


app.listen(PORT, () => {
  console.log(`Server for Shopcart is Up: ${PORT}`);
});
