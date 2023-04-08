import { useState, useEffect } from "react";
import starWarService from "./starWarService";

export function useStarWarsState() {
  const [starWars, setStarWars] = useState(null);
  const [isLoadingStarWars, setisLoadingStarWars] = useState(true);
  const [isStarShipFailure, setIsStarShipFailure] = useState(false);
  const [detailObject, setDetailObject] = useState({});

  const fetchDetailObject = async (url) => {
    try {
      const detail = await starWarService.fetchNextDetailObject(url);
      setDetailObject(detail);
    } catch (err) {
      console.log(err);
    }
  };

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
    detailObject,
    fetchDetailObject,
  };
}
