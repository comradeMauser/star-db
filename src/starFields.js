import React from 'react';


const StarFields = ({data, label, stars}) => {
    console.debug("stars", stars)

    return (
        <ul className="list-group col-6">
            {/*<li className="list-group-item text-center text-warning"> {data.name}</li>*/}
            {/*{*/}
            {/**/}
            {/*    stars.map(element => {*/}
            {/*        return <li*/}
            {/*            className="list-group-item"> {element}: {data[element]}</li>*/}
            {/*    })*/}
            {/*}*/}

            <li className="list-group-item"> {label}: {data[label]}</li>
            <li className="list-group-item"> {label}: {data[label]}</li>
            <li className="list-group-item"> {label}: {data[label]}</li>
            <li className="list-group-item"> {label}: {data[label]}</li>
        </ul>
    );
};
export default StarFields;