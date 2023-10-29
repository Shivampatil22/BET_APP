import DetailsCard from "./DetailsCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
const WinList = () => {
  const [BetList, setBetList] = useState([]);
  const BetInvite = () => {
    console.log("HEllo");
  };
  const BetResult = () => {
    console.log("HEllo");
  };
  const GetWins=async()=>{
     let list = await axios.get(
       `http://localhost:5500/api/getbet/${num}/close`
     );
     list = list.data;
     let final_list = [];
     for (let i = 0; list.length> i; i++) {
       if (list[i].senderNumber == num && list[i].senderFinalResp == "Yes") {
         final_list.push(list[i]);
       }
       if (
         list[i].receiverNumber == num &&
         list[i].receiverFinalResp == "Yes"
       ) {
         final_list.push(list[i]);
       }
     }
     setBetList(final_list);
  }
  const num = localStorage.getItem("phone");
  useEffect( () => {
   GetWins();
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
          senderFinalResp,
          receiverFinalResp,
        } = bet;
        return (
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
        );
      })}
      
    </div>
  );
};

export default WinList;
