import React, { useState, useEffect } from "react";

import PlayersList from "./PlayersList";
import LoadingSpinner from "../UI/LoadingSpinner";

function AvailablePlayers() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch("https://www.balldontlie.io/api/v1/players");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const transformedPlayers = responseData.data.map((playersData) => {
        let fullName = playersData.first_name + " " + playersData.last_name;
        return {
          id: playersData.id,
          fullname: fullName,
          position: playersData.position,
          team: playersData.team.full_name,
          city: playersData.team.city,
        };
      });

      setPlayers(transformedPlayers);
      setIsLoading(false);
    };

    fetchPlayers().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  return (
    <React.Fragment>
      {!isLoading && players.length > 0 && <PlayersList players={players} />}
      {!isLoading && players.length === 0 && !error && <p>Found no players.</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <LoadingSpinner />}
    </React.Fragment>
  );
}

export default AvailablePlayers;
