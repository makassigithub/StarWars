import React from 'react';
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { keyMatches } from '../utils/titlize';

const StarWarsListPropertyField = ({fieldKey, fieldValues}) => {

const navigate = useNavigate();

 return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {
         fieldValues.map((field,index)=> 
            <ListItemButton key={`${field.name}-${index}`} onClick={()=>navigate(`/pilots/${index+1}`,{state:{pilot:field}}) }>
                <ListItemAvatar>
                    <Avatar alt={`${field.name}`} src="pilot-avatar-icon.webp" />
                </ListItemAvatar>
                <ListItemText
                    primary={`${keyMatches[fieldKey] || 'Item'} ${index+1}`}
                />
            </ListItemButton>)
    }
    </List>
 )  

}


export default StarWarsListPropertyField;