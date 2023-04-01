/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { DataContext } from "../App";

import StarWarsItem from "./starShipsItem";
import { ErrorFrame } from "./common/errorFrame";

const StarShipsList = () => {
  const { starWars, isStarShipFailure, isLoadingStarWars, ...actions } = useContext(DataContext);

  return (
    <>
      <h1> Star Wars Starships</h1>
      {isLoadingStarWars ? (
        <div> Loading....</div>
      ) : isStarShipFailure ? (
        <ErrorFrame message="Ooops! Server error, Try again later" />
      ) : (
        starWars.map((item) => <StarWarsItem key={item.Name} starWar={item} {...actions} />)
      )}
    </>
  );
};

export default StarShipsList;
