import React from 'react';
import Loader from "react-loader-spinner";
import {BrowserRouter, Route} from "react-router-dom";
import Service from "../services/service";
import Persons from "./persons";
import Planets from "./planets";
import Starships from "./starships";
import Vehicles from "./vehicles";
import {Provider} from "../services/context"


class List extends React.Component {
    localService = new Service();


    state = {
        loading: true,
    };

    componentDidMount() {
        this.setState({loading: false})
    }

    render() {
        const {loading} = this.state;

        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <Provider value={this.localService}>
                <BrowserRouter>
                    <div className="container-fluid">
                        <Route path="/Persons" component={Persons}/>
                        <Route path="/Vehicles" component={Vehicles}/>
                        <Route path="/Planets" component={Planets}/>
                        <Route path="/Starships" component={Starships}/>

                        {/*<Persons/>*/}
                        {/*<Planets/>*/}
                        {/*<Vehicles/>*/}
                        {/*<Starships/>*/}
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default List;