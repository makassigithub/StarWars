import {useState, useEffect} from 'react';
import starWarService from './starWarService';

export function useStarWarsState(){

    const startWarsState = [];
    const [starWars, setStarWars] = useState(startWarsState)
    const [isLoadingStarWars, setisLoadingStarWars] = useState(true);
    const [showStarWarDetails, setShowStarWarDetails] = useState(false);

    const toggleStarWarDetails = () => setShowStarWarDetails(!showStarWarDetails);

    const getPilote = async url =>  {
       const pilot = localStorage.getItem(url);
       if(pilot) return JSON.parse(pilot);
         try{
            const pilot =  await starWarService.fetchPilot(url);
            localStorage.setItem(url,JSON.stringify(pilot));
            return pilot;
         }catch(e){
            console.log(e);
         }
    }

    useEffect(()=> {
        const state = localStorage.getItem('starWars');
        if(state){
            setStarWars(JSON.parse(state));
            setisLoadingStarWars(false)
            return;
        }
        
        const getStarWars = async () => {
           const starWars =  await starWarService.fetchStarWars();
           localStorage.setItem('starWars',JSON.stringify(starWars.results));
            setStarWars(starWars.results);
            setisLoadingStarWars(false);
        }

        try {
            getStarWars();
        } catch(e){
            console.log('Will manage this soon');
            setisLoadingStarWars(false)
        }
      
    },[])

    return {
        starWars,
        setStarWars,
        isLoadingStarWars,
        setisLoadingStarWars,
        showStarWarDetails,
        toggleStarWarDetails,
        getPilote
    }
}