import "../index.css";
import React, { useState} from "react";

// const Player = ({ item }) => {
//     const {img, name, statistcs} = item;
//     const [toggle, setToggle] = useState(true);
//     const handleToggle = () => {
//         setToggle(!toggle);
//     };
//     // console.log(toggle);
//     return (
//         <div className="cards" onClick={handleToggle}>
//             {toggle ? (
//                     <div>
//                         <img className="nba-img" src={img} alt={name} />
//                     </div>
//                 ) : (
//                     <div>
//                         <ul>
//                             {statistcs.map((item, index) => (
//                                 <p className="list" key={index}>🏀{item}</p>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 <div className="title">
//                     <h1>{name}</h1>
//                 </div>
//         </div>
//     );
// };

// export default Player;


const Player = (data) => {
        return (
              <div className="cards">
                <img className="nba-img" src={data.img} alt={data.name} />
        
        {/* <div className="statistics">
          <h1>{data.statistics}</h1>
        </div> */}

        <div className="title">
          <h1>{data.name}</h1>
        </div>
      </div>
    );
  };
export default Player;