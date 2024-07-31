const express = require("express");
const cors = require("cors");
require("dotenv").config;
const { connectionToDb } = require("./config/db.config");
const { userRouter } = require("./routes/userRouter");
const { transactionRouter } = require("./routes/transactionRouter");
const { ledgerRouter } = require("./routes/ledgerRouter");


const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("get start run server");
});



app.use("/user",userRouter);
app.use("/transaction",transactionRouter)
app.use("/ledger",ledgerRouter)
app.listen(port, async (req, res) => {
  await connectionToDb();
  console.log(`Server run at port ${port}`);
});
