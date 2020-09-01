import React from 'react';
import Loader from "react-loader-spinner";
import {Route} from "react-router-dom";
import Service from "../services/service";
import Persons from "./persons";
// import Planets from "./planets";
// import Starships from "./starships";
// import Vehicles from "./vehicles";
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
                    <Route path="/"
                           render={() =>
                               <h2 className="text-center">...along time ago in a galaxy far far away...</h2>}
                           exact={true}/>
                    <Route path="/Persons" component={Persons} exact={true}/>
                    <Route path="/persons/:id" render={({match})=> {
                        return <Persons itemId={match.params.id}/>
                    }}/>
                    {/*<Route path="/Vehicles" component={Vehicles}/>*/}
                    {/*<Route path="/Planets" component={Planets}/>*/}
                    {/*<Route path="/Starships" component={Starships}/>*/}
                </div>
            </Provider>
        )
    }
}

export default List;