
const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  name: { type: String, required: true},
});

const ledgerModel = mongoose.model('Ledger', ledgerSchema);

module.exports = {
  ledgerModel
}
