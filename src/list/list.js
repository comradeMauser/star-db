import React from 'react';
import Loader from "react-loader-spinner";
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
                <div className="container-fluid">
                    <Persons/>
                    <Planets/>
                    <Vehicles/>
                    <Starships/>
                </div>
            </Provider>
        )
    }
}

export default List;