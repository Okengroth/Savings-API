var mongoose = require('mongoose'), Schema = mongoose.Schema;

var transactionSchema = new Schema({
	description: { type: String },
	date: { type: String },
	amount: { type: Number }
});

module.exports = mongoose.model('Transaction', transactionSchema);	