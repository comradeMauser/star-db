import React from 'react';
import Loader from "react-loader-spinner";
import Persons from "./persons";
import Planets from "./planets";
import Starships from "./starships";
import Vehicles from "./vehicles";


class List extends React.Component {

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
            <div className="container-fluid">
                <Persons/>
                <Planets/>
                <Vehicles/>
                <Starships/>
            </div>
        )
    }
}

export default List;