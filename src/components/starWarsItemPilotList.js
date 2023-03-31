import React from 'react';
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const StarWarsItemPilotList = ({pilots}) => {

const navigate = useNavigate();

 return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {
         pilots.map((pilot,index)=> 
            <ListItemButton key={`${pilot.name}-${index}`} onClick={()=>navigate(`/pilots/${index+1}`,{state:{pilot}}) }>
                <ListItemAvatar>
                    <Avatar alt={`${pilot.name}`} src="pilot-avatar-icon.webp" />
                </ListItemAvatar>
                <ListItemText
                    primary={`Pilot ${index+1}`}
                />
            </ListItemButton>)
    }
    </List>
 )  

}


export default StarWarsItemPilotList;