import "../index.css";

const Player = (data) => {
  return (
    <div className="cards">
      <img className="nba-img" src={data.img} alt="" />

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
