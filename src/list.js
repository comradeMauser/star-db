import React from 'react';
import ListItem from "./list-item";

const List = () => {
    return (
        <div>
          List:
          <ListItem count={0}/>
          <ListItem count={1}/>
          <ListItem count={2}/>
          <ListItem count={3}/>
        </div>
    );
};

export default List;