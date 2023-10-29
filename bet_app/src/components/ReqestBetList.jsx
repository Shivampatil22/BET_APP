import DetailsCard from "./DetailsCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
const ReqestBetList = () => {
  const [BetList, setBetList] = useState([]);
  const num = localStorage.getItem("phone");
  const GetRequests = async () => {
    let list=[];
     list = await axios.get(
       `http://localhost:5500/api/getrequest/${num}/pending`
     );
    list = list.data;
    console.log(list);
    setBetList(list);
  };
  useEffect(() => {
    GetRequests();
  }, []);

  const DeleteBet = async (id) => {
    let result = await axios.delete(
      `http://localhost:5500/api/deletebet/${id}`
    );
    let list = await axios.get(
      `http://localhost:5500/api/getrequest/${num}/pending`
    );
    list = list.data;
    console.log(list)
    setBetList(list);
  };
  const AcceptBet = async (id) => {
    let result = await axios.patch(
      `http://localhost:5500/api/updatestatus/${id}`,
      {
        status: "open",
      }
    );
    let list = await axios.get(
      `http://localhost:5500/api/getrequest/${num}/pending`
    );
    list = list.data;
    
    setBetList(list);
  };

  if (BetList.length == 0) {
    return (
      <div className="w-[96%] pb-4 h-full text-white flex justify-center items-center">
        No Bets Yet....
      </div>
    );
  }
  return (
    <div className="w-[96%] pb-4 h-full flex flex-col scroller">
      {BetList.map((bet,index) => {
       
        const {
          senderName,
          senderResponse,
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
            description={criteria}
            ResolutionDate={resolDate}
            Wager={wager}
            status={"pending"}
            DeleteBet={DeleteBet}
            AcceptBet={AcceptBet}
            Result={"none"}
          />
        );
        
      })}
    </div>
  );
};

export default ReqestBetList;
