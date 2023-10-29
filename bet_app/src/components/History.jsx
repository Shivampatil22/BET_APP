import DetailsCard from "./DetailsCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [BetList, setBetList] = useState([]);
  const num = localStorage.getItem("phone");
  const BetInvite = () => {
    console.log("HEllo");
  };
  const BetResult = () => {
    console.log("HEllo");
  };
  const GetHistory = async () => {
    let list = await axios.get(`http://localhost:5500/api/getbet/${num}/close`);
   
    setBetList(list.data);
  };
  useEffect(() => {
    GetHistory();
  }, []);
  if (BetList.length == 0) {
    return (
      <div className="w-[96%] pb-4 h-full text-white flex justify-center items-center">
        No Bets Yet....
      </div>
    );
  }
  return (
    <div className="w-[96%] pb-4 h-full flex flex-col scroller">
      {BetList.map((bet, index) => {
        const {
          senderName,
          senderResponse,
          senderNumber,
          receiverName,
          receiverResponse,
          criteria,
          resolDate,
          wager,
          receiverNumber,
          senderFinalResp,
          receiverFinalResp,
        } = bet;
        if (
          (senderNumber == num && senderFinalResp == "Yes") ||
          (receiverNumber == num && receiverFinalResp == "Yes")
        ) {
          return(
          <DetailsCard
            key={index}
            Betid={bet._id}
            sender={senderName}
            senderResp={senderResponse}
            receiver={receiverName}
            receiverResp={receiverResponse}
            senderphone={senderNumber}
            description={criteria}
            ResolutionDate={resolDate}
            Wager={wager}
            status={bet.status}
            Result={"win"}
            FinalsenderResp={senderFinalResp}
            FinalreceiverResp={receiverFinalResp}
          />
          )
        }
        if (
          (senderNumber == num && senderFinalResp == "No") ||
          (receiverNumber == num && receiverFinalResp == "No")
        ) {
          return( <DetailsCard
            key={index}
            Betid={bet._id}
            sender={senderName}
            senderResp={senderResponse}
            receiver={receiverName}
            receiverResp={receiverResponse}
            senderphone={senderNumber}
            description={criteria}
            ResolutionDate={resolDate}
            Wager={wager}
            status={bet.status}
            Result={"lose"}
            FinalsenderResp={senderFinalResp}
            FinalreceiverResp={receiverFinalResp}
          />)
         
        }
      })}
    </div>
  );
};

export default History;
