import React from 'react';
import ListItem from "./list-item";


const List = () => {
    return (
        <li style={{listStyleType: "none"}}>
            List:
            <ol><ListItem count={0}/></ol>
            <ul><ListItem count={1}/></ul>
            <ul><ListItem count={2}/></ul>
            <ul><ListItem count={3}/></ul>
        =========
        </li>
    );
};

export default List;