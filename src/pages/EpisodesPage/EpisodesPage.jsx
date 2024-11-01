import React, { useEffect, useState } from "react";
import { fetchEpisodes } from "../../api/api";
import "./EpisodesPage.css";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("S01");
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const data = await fetchEpisodes();
        setEpisodes(data);
        const uniqueSeasons = [
          ...new Set(data.map((episode) => episode.episode.split("E")[0])),
        ];
        setSeasons(uniqueSeasons);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    getEpisodes();
  }, []);

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  };

  const filteredEpisodes = episodes.filter((episode) =>
    episode.episode.startsWith(selectedSeason)
  );

  return (
    <main className="episode__main">
      <h1>Episodes</h1>
      
      <select
        id="season-select"
        value={selectedSeason}
        onChange={handleSeasonChange}
      >
        {seasons.map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select>
      <div className="episodes__container">
        {filteredEpisodes.map((episode) => (
          <div className="episode" key={episode.id}>
            <div className="episodeCode">
              <p>Name: {episode.name}</p>
              <p>Episode: {episode.episode}</p>
            </div>{" "}
             {episode.air_date}
          </div>
        ))}
      </div>
    </main>
  );
};

export default EpisodesPage;
