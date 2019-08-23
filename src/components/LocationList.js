import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        setLocations(res.data.results);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <section className="location-list grid-view">
      {locations &&
        locations.map(location => (
          <LocationCard
            key={location.name}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
        ))}
    </section>
  );
};

export default LocationList;
