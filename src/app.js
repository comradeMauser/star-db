import React from 'react';
import Header from "./header";
// import Random from "./random";
import List from "./list";
import "./app.css";


const App = () => {
    return (
        <div className="app">
            <Header/>
            {/*<Random/>*/}
            <List/>
        </div>
    );
};

export default App;