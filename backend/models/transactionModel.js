const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  ledgerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ledger'},
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['Given', 'Taken'], required: true },
});

const transactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = {
  transactionModel
}