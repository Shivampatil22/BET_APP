const Bet = require('../model/betSchema');

//api to create new bet
const createBet = async (req, resp) => {
  try {
    let bet = new Bet(req.body);
    let result = await bet.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ error: 'Error creating a bet', details: error.message });
  }
};

//api to find all the bets using a specific number involved in both sender and receiver.
const getBet = async (req, resp) => {
  try {
    const arr1 = await Bet.find({
      senderNumber: req.params.num,
      status: req.params.status
    });

    const arr2 = await Bet.find({
      receiverNumber: req.params.num,
      status: req.params.status
    });

    const arr3 = [...arr1, ...arr2];
    resp.send(arr3);
  } catch (error) {
    resp.status(500).send('An error occurred: ' + error.message);
  }
};


//api to get bet Request
const getRequestBet = async (req, resp) => {
  try {
 
    const arr2 = await Bet.find({
      receiverNumber: req.params.num,
      status: req.params.status
    });

    
    resp.send(arr2);
  } catch (error) {
    resp.status(500).send('An error occurred: ' + error.message);
  }
};


const deleteBet = async(req,resp) =>{
  try{
    const result = await Bet.deleteOne({_id:req.params.id})
    resp.send(result);
  }catch(error){
    resp.status(500).send('Error deleting your bet');
  }
};

//api to update the status
const updateStatus = async (req, resp) => {
  try {
    let result = await Bet.findOne({_id:req.params.id})
    result.status=req.body.status;
    result=await result.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ error: 'Error updating bet status', details: error.message });
  }
};


//api which finds a bet with specific id and then sets the final resp of both parties according to the check code sent.
const setFinalResp = async (req, resp) => {
  try {
    let result = await Bet.findOne({ _id: req.params.id });
    const check = req.params.check;
    const finalResp = req.body.finalResp
    if (check == '1') {
      result.senderFinalResp = finalResp;
    } else if(check =='0') {
      result.receiverFinalResp = finalResp;
    }else{
      result.senderFinalResp = "NIL";
      result.receiverFinalResp = "NIL";
    }

    result = await result.save();
    resp.send(result);

  } catch (error) {
    resp.status(500).send({ error: 'An error occurred while processing your request' });
  }
};


module.exports = {createBet, updateStatus, getBet, setFinalResp, deleteBet,getRequestBet};

