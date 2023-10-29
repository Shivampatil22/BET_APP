import React from "react";
import axios from "axios";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
const DetailsCard = ({
  Betid,
  sender,
  senderResp,
  senderphone,
  receiver,
  receiverResp,
  description,
  ResolutionDate,
  Wager,
  status,
  DeleteBet,
  AcceptBet,
  FinalsenderResp,
  FinalreceiverResp,
  Result,
}) => {
  const normal =
    "w-full tbl flex items-start px-5 py-3 my-3 lg:flex-row flex-col justify-evenly";
  const lose =
    "w-full lose flex items-start px-5 py-3 my-3 lg:flex-row flex-col justify-evenly";
  const win =
    "w-full win flex items-start px-5 py-3 my-3 lg:flex-row flex-col justify-evenly";

  const phone = localStorage.getItem("phone");
  const SendRespone = async (
    senderPhone,
    id,
    resp,
    senderResp,
    receiverResp
  ) => {
    console.log(senderPhone);
    let check = 0;
    if (senderphone == phone) {
      check = 1;
    }
    if (check == 1) {
      if (receiverResp == "NIL") {
        await axios.patch(`http://localhost:5500/api/setfinalresp/${id}/1`, {
          finalResp: resp,
        });
      } else {
        if (receiverResp == resp) {
          alert("Both participants have given same response");
        } else {
          await axios.patch(`http://localhost:5500/api/setfinalresp/${id}/1`, {
            finalResp: resp,
          });
          if (resp == "Yes") {
            alert("Congratulation you won the bet");
          }
          await axios.patch(`http://localhost:5500/api/updatestatus/${id}`, {
            status: "close",
          });
        }
      }
    } else {
      if (senderResp == "NIL") {
        await axios.patch(`http://localhost:5500/api/setfinalresp/${id}/0`, {
          finalResp: resp,
        });
      } else {
        if (senderResp == resp) {
          alert("Both participants have given same response");
        } else {
          await axios.patch(`http://localhost:5500/api/setfinalresp/${id}/0`, {
            finalResp: resp,
          });
          if (resp == "Yes") {
            alert("Congratulation you won the bet");
          }
          await axios.patch(`http://localhost:5500/api/updatestatus/${id}`, {
            status: "close",
          });
        }
      }
    }
    alert("Your Respones is noted")
  };
  return (
    <div
      className={
        (Result == "none" && normal) ||
        (Result == "lose" && lose) ||
        (Result == "win" && win)
      }
    >
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
          <span className="text-lg font-light">{receiverResp}</span>
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
      {status == "pending" && (
        <div className="flex lg:flex-col  justify-evenly h-full mx-3 ">
          <button
            className="text-[3rem] lg:mx-0 mx-4 text-green-600"
            onClick={() => {
              AcceptBet(Betid);
            }}
          >
            <AiOutlineCheckCircle />
          </button>
          <button
            className="text-[3rem] text-red-600"
            onClick={() => {
              DeleteBet(Betid);
            }}
          >
            <RxCrossCircled />
          </button>
        </div>
      )}
      {status == "final" && (
        <div className="flex flex-col mx-3">
          <div className="text-white font-semibold text-lg">
            Was this Bet Result in your Favour?
          </div>
          <div className="flex justify-around my-3">
            <button
              className="text-xl mx-3 bg-blue-600 text-white font-semibold py-1 px-2 rounded-md  "
              onClick={() => {
                SendRespone(
                  senderphone,
                  Betid,
                  "Yes",
                  FinalsenderResp,
                  FinalreceiverResp
                );
              }}
            >
              YES
            </button>
            <button
              className="text-xl bg-red-600 text-white font-semibold py-1 px-2 rounded-md "
              onClick={() => {
                SendRespone(
                  senderphone,
                  Betid,
                  "No",
                  FinalsenderResp,
                  FinalreceiverResp
                );
              }}
            >
              NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCard;
