require('dotenv').config();
const accountSid=process.env.TWILIO_ACCOUNT_SID
const authToken=process.env.TWILIO_AUTH_TOKEN
const serviceId=process.env.TWILIO_MESSAGING_SERVICE_ID;
const client = require('twilio')(accountSid, authToken);


const sendMessage = async (req, resp) => {
    try {
      const message = await client.messages.create({
        to: '+918303853619',
        from: '+16562130651',
        messagingServiceSid: serviceId,
        body: `Hi there is a bet being placed, please click the link below to accept/decline the request `,
      });
      
      // Send a response to the API
      resp.status(200).json({ message: 'Message sent successfully', messageSid: message.sid });
    } catch (error) {
      // Handle the error if the message wasn't sent
      console.error(error);
      resp.status(500).json({ error: 'Message sending failed', details: error.message });
    }
}

const sendResolutionUpdate = async (req, resp) => {

    const dateObj = new Date(req.body.resolDate);
    // Extract the individual components
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Months are zero-based, so add 1
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();


    const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));

    // Calculate the date and time 5 hours and 30 minutes behind
    utcDate.setUTCHours(utcDate.getUTCHours() - 5);
    utcDate.setUTCMinutes(utcDate.getUTCMinutes() - 30);
  
    // Extract the year, month, day, hours, minutes, and seconds in UTC
    const utcYear = utcDate.getUTCFullYear();
    const utcMonth = utcDate.getUTCMonth() + 1; // Months are 0-based
    const utcDay = utcDate.getUTCDate();
    const utcHours = utcDate.getUTCHours();
    const utcMin = utcDate.getUTCMinutes();
    const utcSec = utcDate.getUTCSeconds();

    console.log(utcYear, utcMonth, utcDay, utcHours, utcMin, utcSec)
    
  try {
    const message = await client.messages.create({
      to: '+918303853619',
      from: '+16562130651',
      messagingServiceSid: serviceId,
      sendAt: new Date(Date.UTC(utcYear,utcMonth-1,utcDay,utcHours,utcMin,utcSec)),
      scheduleType: 'fixed',
      body: `Hi there is a bet being placed, please click the link below to accept/decline the request `,
    });
    
    // Send a response to the API
    resp.status(200).json({ message: `Message scheduled successfully for ${req.body.resolDate}`, messageSid: message.sid });
  } catch (error) {
    // Handle the error if the message wasn't sent
    console.error(error);
    resp.status(500).json({ error: 'Message sending failed', details: error.message });
  }
}

module.exports = {sendMessage, sendResolutionUpdate};