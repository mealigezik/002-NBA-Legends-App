import React from "react";
import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";
import { useState } from "react";

const CardContainer = () => {
  console.log(data);
  const [searchCard, setSearchCard] = useState("");
  return (
    <div className="card_container">
      <input
        onChange={(e) => setSearchCard(e.target.value)}
        className="search_bar"
        type="text"
        placeholder="Search Player..."
      />
      <div className="player_container">
        {data
          .filter((player) => {
            return player.name
              .toLocaleLowerCase()
              .includes(searchCard.toLocaleLowerCase());
          })
          .map((item, index) => {
            return <PlayerCard item={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default CardContainer;





// const CardContainer = () => {
//   return (
//     <div className="card-container">
//       {data.map((item, index) => (
//         <Player {...item} key={index} />
//       ))}
//     </div>
//   );
// };

// export default CardContainer;