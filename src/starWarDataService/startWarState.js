import {useState, useEffect} from 'react';
import starWarService from './starWarService';

export function useStarWarsState(){

    const startWarsState = null;
    const [starWars, setStarWars] = useState(startWarsState)
    const [isLoadingStarWars, setisLoadingStarWars] = useState(true);

    const getPilote = url => starWarService.fetchPilot(url);
    const getStarWars = async () => {
        if(starWars) return;
         const starShips =  await starWarService.fetchStarWars();
         setStarWars(starShips);
         setisLoadingStarWars(false);
     }

    useEffect(()=> {
        getStarWars();
        return ()=> starWarService.clean();
    },[])

    return {
        starWars,
        setStarWars,
        isLoadingStarWars,
        setisLoadingStarWars,
        getPilote
    }
}