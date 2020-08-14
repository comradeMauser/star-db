import React from 'react';
import Person from "./details/person";

const ListItem = ({count}) => {
    return (
        <ul className="list-group-item">
            <Person/>-{count}
        </ul>
    );
};

export default ListItem;