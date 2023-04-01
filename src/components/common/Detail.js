import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import AccordionDetails from '@mui/material/AccordionDetails';
import starWarService from "../../starWarDataService/starWarService";
import { keyMatches, getPageTite } from "../../utils/titlize";

import StarWarItemDetails from "../starShipsItemDetails";

const Detail = () => {
    const {state} = useLocation();
    const [nextItem, setNextItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [failedLoading, setFailedLoading] = useState(false);

    useEffect(()=>{
        (async () => {
            try{
                const itemObj = await starWarService.fetchPilot(state.nextDetailUrl);
                setNextItem(itemObj);
                setLoading(false)
            }catch(e){
                console.log(e);
                setFailedLoading(true)
            }
        })()
    },[state.nextDetailUrl]); 
  
    return <>
            <h1>{`${getPageTite(state.nextDetailUrl)}`}</h1>
            <div className="item-details">
                <AccordionDetails>
                    {
                    loading ? 'Loading...':
                    failedLoading ?  'Failed to fetch the pilot...':
                        <StarWarItemDetails
                            listObject={nextItem}
                        />
                    }
                </AccordionDetails>
            </div>
        </> ;
}
   
export default Detail;