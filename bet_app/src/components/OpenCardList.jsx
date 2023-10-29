import React, { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import axios from "axios";

const CardList = () => {
  const [BetList, setBetList] = useState([]);
  const num=localStorage.getItem("phone");
  const BetInvite = () => {
    console.log("HEllo");
  };
  const BetResult = () => {
    console.log("HEllo");
  };
  const GetOpenBets=async()=>{
        let list1 = await axios.get(
          `http://localhost:5500/api/getbet/${num}/open`
        );
        list1 = list1.data;
        let list2 = await axios.get(
          `http://localhost:5500/api/getbet/${num}/final`
        );
        list2 = list2.data;
        list2 = [...list2, ...list1];
        setBetList(list2);
  }
  useEffect(() => {
      GetOpenBets();
  },[]);
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
          receiverNumber,
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
            receiverNumber={receiverNumber}
            description={criteria}
            ResolutionDate={resolDate}
            Wager={wager}
            status={bet.status}
            Result={"none"}
            FinalsenderResp={senderFinalResp}
            FinalreceiverResp={receiverFinalResp}
          />
        );
      })}
    </div>
  );
};

export default CardList;
