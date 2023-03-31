import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import StarWarItemDetails from './starWarItemDetails';
import StarWarsItemPilotList from './starWarsListPropertyField';
//import './components.css'



const StarWarsItem = props => {
    const { 
        starWar
    } = props;

    const { films, ...rest} = starWar;
    //const fieldsToShow = Object.keys(rest).filter(key=> typeof starWar[key] ==='string');

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography>{rest.Name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <StarWarItemDetails
                        listObject={starWar}
                    />
                </AccordionDetails>
            </Accordion> 
        </div>
    )
}

export default StarWarsItem;