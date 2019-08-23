import React, { useState, useEffect } from "react";
import axios from "axios";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h2>Episode List</h2>
    </div>
  );
};

export default EpisodeList;
