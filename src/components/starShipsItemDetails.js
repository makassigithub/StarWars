import React from 'react';

import StarWarsListPropertyField from './starWarsListPropertyField';
import './components.css';

const StarShipsItemDetails = ({listObject}) => {
    const stringValues = Object.keys(listObject).filter(key=> typeof listObject[key] ==='string');
    const arrayValues = Object.keys(listObject).filter(key=> Array.isArray(listObject[key]) && listObject[key].length> 0);

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
                    <tr key={record_key}>
                        <td>{record_key}</td>
                        <td id="array-items">
                            <StarWarsListPropertyField 
                                fieldValues={listObject[record_key]}
                                fieldKey={record_key}
                            />
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}


export default StarShipsItemDetails;
