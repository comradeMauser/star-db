import React from 'react';
import Header from "./header";
import List from "./list";
import Random from "./random";

const App = () => {
    return (
        <div>
            <Header/>
            <Random/>
            <List/>
        </div>
    );
};

export default App;