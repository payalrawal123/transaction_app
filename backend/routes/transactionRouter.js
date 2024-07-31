const express = require("express");
const {  transactionModel } = require("../models/transactionModel");
const { ledgerModel } = require("../models/ledgerModel");

const transactionRouter = express.Router();

transactionRouter.post("/", async (req, res) => {
  const { ledgerId, date, amount, type } = req.body;

  try {
    // Validate if ledgerId exists
    const ledger = await ledgerModel.findById(ledgerId);
    if (!ledger) {
      return res.status(404).json({ error: 'Ledger not found' });
    }

    const transaction = new transactionModel({ ledgerId, date, amount, type });
    await transaction.save();
    res.status(201).json({ message: 'Transaction added successfully', transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
transactionRouter.get("/",async(req,res) => {
  try {
    const { ledgerId } = req.params;
    const { startDate, endDate } = req.query;
    const transactions = await transactionModel.find({
      ledger: ledgerId,
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = {
  transactionRouter
}
