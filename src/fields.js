import React from 'react';


const Fields = (props) => {
    const {data, fields} = props
    console.debug("const Fields:", fields)
    return (
        <ul className="list-group col-6">
            <li className="list-group-item text-center text-warning">{data.name}</li>
            {
                fields.map(element => {
                    return <li key={fields.length++}
                               className="list-group-item"> {element}: {data[element]}</li>
                })
            }
        </ul>
    );
};

export default Fields;