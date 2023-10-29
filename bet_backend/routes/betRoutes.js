const express = require("express");
const router = express.Router();
const {createBet, updateStatus, getBet, setFinalResp, deleteBet,getRequestBet} = require('../task/betFunctions');
const {sendMessage, sendResolutionUpdate} = require('../task/twilioFunctions');

//api to create a new bet
router.post('/api/createbet', createBet);

//api to get all the bets
router.get('/api/getbet/:num/:status', getBet);

router.get('/api/getrequest/:num/:status', getRequestBet);

//api to delete a specific bet
router.delete('/api/deletebet/:id', deleteBet);

//api to update the status of bet
router.patch('/api/updatestatus/:id', updateStatus);

//api to getmessage response using twilio
router.post('/api/sendmessage', sendMessage);

//api to send scheduled message at resolution date using twilio
router.post('/api/sendresolupdate/:id/:check', sendResolutionUpdate);

//api to set the final response of both individuals/parties depending on an check code passed as params
router.patch('/api/setfinalresp/:id/:check', setFinalResp);


module.exports = router;


