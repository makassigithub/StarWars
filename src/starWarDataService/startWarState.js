import { useState, useEffect } from "react";
import starWarService from "./starWarService";

export function useStarWarsState() {
  const startWarsState = null;
  const [starWars, setStarWars] = useState(startWarsState);
  const [isLoadingStarWars, setisLoadingStarWars] = useState(true);
  const [isStarShipFailure, setIsStarShipFailure] = useState(false);

  const getPilote = (url) => starWarService.fetchPilot(url);
  const getStarWars = async () => {
    try {
      const starShips = await starWarService.fetchStarWars();
      setStarWars(starShips);
      setisLoadingStarWars(false);
    } catch (e) {
      setisLoadingStarWars(false);
      setIsStarShipFailure(true);
    }
  };

  useEffect(() => {
    getStarWars();
  }, []);

  return {
    starWars,
    setStarWars,
    isLoadingStarWars,
    setisLoadingStarWars,
    isStarShipFailure,
    getPilote,
  };
}
