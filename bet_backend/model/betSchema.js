const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true, 
  },
  senderResponse: {
    type: String,
    required: true, 
  },
  senderNumber:{
    type: Number,
    required: true,
  },
  receiverName: {
    type: String,
    required: true, 
  },
  receiverResponse: {
    type: String,
    required: true, 
  },
  receiverNumber: {
    type: Number,
    required: true,
  },
  criteria: {
    type: String,
    required: true, 
  },
  resolDate: {
    type: String,
    required: true, 
  },
  wager: {
    type: String,
    required: true, 
  },
  status: {
    type: String,
    required: true,
  },
  senderFinalResp:{
    type: String,
    required: true,
  },
  receiverFinalResp:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Bet', betSchema);
