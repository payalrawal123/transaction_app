
const express = require("express");
const { ledgerModel } = require("../models/transactionModel");

const ledgerRouter = express.Router();

ledgerRouter.post("/",async(req,res)=>{
  try {
    const { name } = req.body;
    const ledger = new ledgerModel({ name });
    await ledger.save();
    res.status(201).json(ledger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
ledgerRouter.get("/",async (req, res) => {
  try {
    const ledgers = await ledgerModel.find();
    res.status(200).json(ledgers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  });

module.exports = {
    ledgerRouter
}