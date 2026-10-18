import React, { useState } from "react";

const PlayerCard = ({ item }) => {
  const { img, name, statistics = [] } = item;
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <article className="player_card">
      <button
        type="button"
        className="player_card_toggle"
        onClick={() => setShowStatistics((visible) => !visible)}
        aria-expanded={showStatistics}
        aria-label={`${showStatistics ? "Hide" : "Show"} statistics for ${name}`}
      >
        {showStatistics ? (
          <ul className="statistics_list">
            {statistics.map((statistic, index) => (
              <li className="list" key={`${name}-stat-${index}`}>
                🏀 {statistic}
              </li>
            ))}
          </ul>
        ) : (
          <span className="image_div">
            <img className="image" src={img} alt={name} loading="lazy" />
          </span>
        )}
        <span className="name">{name}</span>
      </button>
    </article>
  );
};

export default PlayerCard;
