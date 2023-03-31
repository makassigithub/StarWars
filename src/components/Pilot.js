import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import AccordionDetails from '@mui/material/AccordionDetails';
import starWarService from "../starWarDataService/starWarService";

import { useStarWarsState } from '../starWarDataService/startWarState';
import StarWarItemDetails from "./starWarItemDetails";

const Pilot = () => {
    const {state} = useLocation();
    const [pilot, setPilot] = useState({});
    const [loading, setLoading] = useState(true);
    const [failedLoading, setFailedLoading] = useState(false);

    useEffect(()=>{
        (async () => {
            try{
                const pilot = await starWarService.fetchPilot(state.pilot);
                setPilot(pilot);
                setLoading(false)
            }catch(e){
                setFailedLoading(true)
                console.log(e);
            }
        })()
    },[]); 
  
    return  <AccordionDetails>
                {
                loading ? 'Loading...':
                failedLoading ?  'Failed to fetch the pilot...':
                    <StarWarItemDetails
                        listObject={pilot}
                    />
                }
            </AccordionDetails>;
}
   
export default Pilot;