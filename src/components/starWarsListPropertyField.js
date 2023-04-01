import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';


import { keyMatches } from '../utils/titlize';
import './components.css';

const buttonStyle = 
    {
        width: 200,
        marginRight: 2,
        backgroundColor:'transparent',
        border: 1,
        borderColor: '#a9a39f',
        color:'#0089c7',
        alignSelf:'flex-end',
        marginY: 1,
        '&:hover': {
            backgroundColor:'#ff7a18',
            color:'#fff',
        }

      }

const StarWarsListPropertyField = ({fieldKey, fieldValues}) => {

const navigate = useNavigate();

 return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
    {
         fieldValues.map((field,index)=> 
         <Button
            variant="contained"
            sx={buttonStyle}
            endIcon={<SendIcon />}
            key={`${field.name}-${index}`} 
            onClick={()=>navigate(`/details/${index+1}`,{state:{nextDetailUrl:field}})}
         >
           {`${keyMatches[fieldKey] || 'Item'} ${index+1}`}
         </Button>
        )
    }
    </List>
 )  

}


export default StarWarsListPropertyField;