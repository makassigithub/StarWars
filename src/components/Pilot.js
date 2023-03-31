import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import AccordionDetails from '@mui/material/AccordionDetails';

import { useStarWarsState } from '../starWarDataService/startWarState';
import StarWarItemDetails from "./starWarItemDetails";

const Pilot = () => {
    const {state} = useLocation();
    const { getPilote } = useStarWarsState();
    const [pilot, setPilot] = useState({});
    const [loading, setLoading] = useState(true);
    const [failedLoading, setFailedLoading] = useState(false);

    useEffect(()=>{
        (async () => {
            try{
                const pilot = await getPilote(state.pilot);
                setPilot(pilot);
                setLoading(false)
            }catch(e){
                setFailedLoading(true)
                console.log(e);
            }
        })()
    },[]); 

    //const fieldsToShow = Object.keys(pilot).filter(key=> typeof pilot[key] ==='string');
    
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