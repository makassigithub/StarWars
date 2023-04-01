import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import StarWarItemDetails from './starShipsItemDetails';
import './components.css'



const StarShipsItem = props => {
    const { 
        starWar
    } = props;

    const { films, ...rest} = starWar;

    return (
        <div className='list-content'>
            <Accordion
                TransitionProps={{ unmountOnExit: true }}
                style={{backgroundColor:'#262626'}}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography className='accordion-title'>{rest.Name}</Typography>
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

export default StarShipsItem;