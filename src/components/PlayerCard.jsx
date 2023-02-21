import React, { useState } from "react";

const PlayerCard = ({ item }) => {
  const { img, name, statistics } = item;
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  //   console.log(toggle);
  return (
    <div className="player_card" onClick={handleToggle}>
      {toggle ? (
        <div className="image_div">
          <img className="image" src={img} alt="" />
        </div>
      ) : (
        <div className="list_div">
          <ul>
            {statistics.map((item, index) => (
              <p className="list" key={index}>
                🏀{item}
              </p>
            ))}
          </ul>
        </div>
      )}
      <div className="name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PlayerCard;


// const Player = (data) => {
//         return (
//               <div className="cards">
//                 <img className="nba-img" src={data.img} alt={data.name} />
        
//         {/* <div className="statistics">
//           <h1>{data.statistics}</h1>
//         </div> */}

//         <div className="title">
//           <h1>{data.name}</h1>
//         </div>
//       </div>
//     );
//   };
// export default Player;