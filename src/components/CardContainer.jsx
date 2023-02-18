import "../index.css";
import Player from "./Player";
import { data } from "../helper/data";

const CardContainer = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Player {...item} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;