import React from 'react';


const StarFields = ({data, field, label, stars}) => {
    console.debug("stars", stars)

    return (
        <ul className="list-group col-6">
            <li className="list-group-item text-center text-warning"> {label}</li>
            <li className="list-group-item"> {field}: {data[label]}</li>
            <li className="list-group-item"> {field}: {data[label]}</li>
            <li className="list-group-item"> {field}: {data[label]}</li>
            <li className="list-group-item"> {field}: {data[label]}</li>
        </ul>
    );
};
export default StarFields;