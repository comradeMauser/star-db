import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./header";
// import Random from "./random";
import List from "./list/list";
import "./app.css";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                {/*<Random/>*/}
                <List/>
            </div>
        </BrowserRouter>
    );
};

export default App;