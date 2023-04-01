import React, {useContext} from 'react';
import { DataContext } from '../App';

import StarWarsItem from './starShipsItem';



const StarShipsList = props => {
    const { starWars, isLoadingStarWars, ...actions } = useContext(DataContext);

   return (
    <>
    <h1> Start War Starships</h1>
    { isLoadingStarWars ?
     <div> Loading....</div> :
      starWars.map(item => 
        <StarWarsItem 
            key={item.Name} 
            starWar={item}
            {...actions}
        /> )
    }
  </>
   )
}



export default StarShipsList;