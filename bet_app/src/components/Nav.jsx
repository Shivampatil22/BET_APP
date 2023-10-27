import React from "react";

const Nav = ({ username }) => {
  return (
    <div className="h-min w-full py-4 bg-slate-950 text-white flex flex-col px-3">
      <div className="flex w-full justify-between px-6 items-center">
        <span className="md:text-2xl text-md font-bold">
          Welcome,{username}
        </span>
        <span>
          <button className="bg-purple-800 md:text-xl text-sm px-2 py-1 font-bold rounded-md md:mx-10 mx-2">
            Create Bet
          </button>
          <button className="bg-red-600 md:text-lg text-sm px-2 py-1 font-bold rounded-md">
            Logout
          </button>
        </span>
      </div>
      <div className="py-3 flex w-full justify-around mt-2">
        <span className="font-semibold md:text-xl cursor-pointer">
          Bet Request
        </span>
        <span className="font-semibold md:text-xl cursor-pointer">Open Bets</span>
        <span className="font-semibold md:text-xl cursor-pointer">Wins</span>
        <span className="font-semibold md:text-xl cursor-pointer">Loses</span>
        <span className="font-semibold md:text-xl cursor-pointer">History</span>
      </div>
    </div>
  );
};

export default Nav;
