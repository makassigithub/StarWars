import { useState, useEffect } from "react";
import starWarService from "./starWarService";

export function useStarWarsState() {
  const [starWars, setStarWars] = useState(null);
  const [isLoadingStarWars, setisLoadingStarWars] = useState(true);
  const [isStarShipFailure, setIsStarShipFailure] = useState(false);

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
  };
}
