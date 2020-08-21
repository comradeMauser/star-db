import React from 'react';


const StarFields = ({data, stars}) => {

    return (
        <ul className="list-group col-6">
            <li className="list-group-item text-center text-warning">{data.name}</li>
            {
                stars.map(element => {
                    return <li key={stars.length++}
                        className="list-group-item"> {element}: {data[element]}</li>
                })
            }
        </ul>
    );
};


export default StarFields;