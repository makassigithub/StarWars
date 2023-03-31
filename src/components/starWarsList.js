import React, {useContext} from 'react';
import { DataContext } from '../App';

import StarWarsItem from './starWarsItem';
import { useStarWarsState } from '../starWarDataService/startWarState';


const StarWarList = props => {
    const { starWars, isLoadingStarWars, ...actions } = useContext(DataContext);

   return (
    <>
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



export default StarWarList;