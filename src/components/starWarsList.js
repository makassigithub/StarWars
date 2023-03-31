import React from 'react';

import StarWarsItem from './starWarsItem';
import { useStarWarsState } from '../starWarDataService/startWarState';


const StarWarList = props => {
    const { starWars, isLoadingStarWars, ...actions } = useStarWarsState();

   return (
    <>
    { isLoadingStarWars ?
     <div> Loading....</div> :
      starWars.map(item => 
        <StarWarsItem 
            key={item.name} 
            starWar={item}
            {...actions}
        /> )
    }
  </>
   )
}



export default StarWarList;