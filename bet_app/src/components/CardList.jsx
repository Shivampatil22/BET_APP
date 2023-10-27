import React from 'react'
import DetailsCard from './DetailsCard'

const CardList = () => {
  const BetInvite=()=>{
    console.log("HEllo")
  }
  const BetResult=()=>{
    console.log("HEllo");
  }
  return (
    <div className="w-[96%] h-[90%] overflow-y-scroll flex flex-col scroller">
      <DetailsCard sender={"Dylan Albin"}
      senderResp={"Yes"}
      receiver={"Assim"}
      receiverResp={"No"}
      description={"  Tomorrow India win the match Lorem ipsum dolor, sit amet consecteturadipisicing elit. Pariatur sunt, numquam deserunt hic neque alias.Corrupti, earum deserunt voluptate similique voluptas illo blanditiisvoluptates temporibus dignissimos iste modi adipisci dolor."}
      ResolutionDate={"22-06-2023"} 
      Wager={"1000 $"}
      status={"open"}
      BetInvite={BetInvite}
      BetResult={BetResult}
      />
       
    </div>
  );
}

export default CardList
