import React from "react";

const DetailsCard = ({
  sender,
  senderResp,
  receiver,
  receiverResp,
  description,
  ResolutionDate,
  Wager,
  status,
  BetInvite,
  BetResult,
}) => {
  return (
    <div className="w-full tbl flex items-start px-5 py-3 lg:flex-row flex-col justify-evenly ">
      <div className="flex my-2">
        <span className="flex flex-col mx-3  text-white">
          <span className="text-lg font-semibold">Bet Initiator</span>
          <span className="text-lg font-light">{sender}</span>
        </span>
        <span className="flex flex-col mx-3 text-white">
          <span className="text-lg font-semibold">Response</span>
          <span className="text-lg font-light">{senderResp}</span>
        </span>
      </div>
      <div className="flex  my-2">
        <span className="flex flex-col mx-3 text-white">
          <span className="text-lg font-semibold">Bet Receiver</span>
          <span className="text-lg font-light">{receiver}</span>
        </span>
        <span className="flex flex-col mx-3 text-white">
          <span className="text-lg font-semibold">Response</span>
          <span className="text-lg font-light">{receiver}</span>
        </span>
      </div>

      <span className="flex flex-col max-h-[12rem] lg:max-w-[38%] mx-3  my-2 text-white">
        <span className="text-lg font-semibold">Description</span>
        <span className="text-lg font-light overflow-y-scroll scroller">
        {description}
        </span>
      </span>
      <div className="flex  my-2">
        <span className="flex flex-col mx-5 text-white">
          <span className="text-lg font-semibold">Date Of Resolution</span>
          <span className="text-lg font-light">{ResolutionDate}</span>
        </span>
        <span className="flex flex-col mx-3  text-white">
          <span className="text-lg font-semibold">Wager</span>
          <span className="text-lg font-light">{Wager}</span>
        </span>
      </div>
    </div>
  );
};

export default DetailsCard;
