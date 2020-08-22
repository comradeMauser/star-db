import React from 'react';

const Row = ({left, right}) => {
    //left - ListItem
    //right - ItemDetail

    return (
        <div className="container row">
            <div className="col-6">{left}</div>
            <div className="col-6">{right}</div>
        </div>
    );
};

export default Row;