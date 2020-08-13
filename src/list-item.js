import React from 'react';
import Person from "./details/person";

const ListItem = ({count}) => {
    return (
        <div className="d-flex">
            <Person/>-{count}
        </div>
    );
};

export default ListItem;