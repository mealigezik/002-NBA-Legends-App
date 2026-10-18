import { useState } from "react";
import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";

const CardContainer = () => {
  const [searchCard, setSearchCard] = useState("");

  const normalizedSearch = searchCard.trim().toLocaleLowerCase();

  const filteredPlayers = data.filter((player) =>
    player.name.toLocaleLowerCase().includes(normalizedSearch)
  );

  return (
    <section className="card_container" aria-label="NBA players">
      <label className="visually-hidden" htmlFor="player-search">Search players</label>
      <input
        id="player-search"
        onChange={(event) => setSearchCard(event.target.value)}
        className="search_bar"
        type="search"
        placeholder="Search player..."
        value={searchCard}
      />
      <div className="player_container">
        {filteredPlayers.map((item) => (
          <PlayerCard item={item} key={item.name} />
        ))}
        {filteredPlayers.length === 0 && <p role="status">No players match your search.</p>}
      </div>
    </section>
  );
};

export default CardContainer;
