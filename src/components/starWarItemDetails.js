import React from 'react';

import StarWarsItemPilotList from './starWarsItemPilotList';

import './components.css'
const StarWarItemDetails = ({listObject}) => {
    const stringValues = Object.keys(listObject).filter(key=> typeof listObject[key] ==='string');
    const arrayValues = Object.keys(listObject).filter(key=> Array.isArray(listObject[key]) && listObject[key].length);


    return (
        <table>
            <tbody>
                {stringValues.map((record_key) => (
                    <tr  key={record_key}>
                        <td>{record_key}</td>
                        <td>{listObject[record_key]}</td>
                    </tr>
                    
                ))}
                {arrayValues.map(record_key => (
                    <tr id='array-list'>
                    <td>{record_key}</td>
                    <td><StarWarsItemPilotList pilots={listObject[record_key]}/></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}


export default StarWarItemDetails;

