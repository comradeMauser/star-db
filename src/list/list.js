import React from 'react';
import Loader from "react-loader-spinner";
import {Route, Switch} from "react-router-dom";
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
                    <Switch>
                        <Route path="/"
                               render={() =>
                                   <h2 className="text-center">...along time ago in a galaxy far far away...</h2>}
                               exact={true}/>

                        <Route path="/Persons" component={Persons} exact={true}/>
                        <Route path="/Persons/:id" render={({match}) => {
                            return <Persons itemId={match.params.id}/>
                        }}/>

                        <Route path="/Vehicles" component={Vehicles} exact={true}/>
                        <Route path="/Vehicles/:id" render={({match}) => {
                            return <Vehicles itemId={match.params.id}/>
                        }}/>

                        <Route path="/Planets" component={Planets} exact={true}/>
                        <Route path="/Planets/:id" render={({match}) => {
                            return <Planets itemId={match.params.id}/>
                        }}/>

                        <Route path="/Starships" component={Starships} exact={true}/>
                        <Route path="/Starships/:id" render={({match}) => {
                            return <Starships itemId={match.params.id}/>
                        }}/>

                        <Route render={() => <h3>it`s no use</h3>}/>
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default List;