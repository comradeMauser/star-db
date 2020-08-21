import React from 'react';
import Loader from "react-loader-spinner";
import Person from "./details/person";
import Starship from "./details/starship";
import ListItems from "./list-items";
import Service from "./services/service";
import StarFields from "./starFields";


class List extends React.Component {

    localService = new Service();

    state = {
        person: {},
        loading: true,
        elementStarId: 5,
    };

    componentDidMount() {
        this.setState({loading: false})
    }

    getPerson = (id) => {
        this.localService.getPerson(id)
            .then((person) => {
                this.setState({person})
            })
        // console.log("person:", this.state.person)
    };

    getElementId = (itemListId) => {
        this.setState({elementStarId: itemListId})
    }

    render() {
        const {person, loading, elementStarId} = this.state;
        const {getAllPersons, getStarship, getStarshipImage} = this.localService
        console.debug("elementStarId", elementStarId)
        const stars = ["name", "model", "passengers", "cost", "crew"]
        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <div className="row">
                <div className="col-5">
                    List:
                    {/*<ListItems listItems={getAllPersons} getItem={this.getPerson}/>*/}
                    <ListItems listItems={this.localService.getAllStarships} getItem={this.getElementId}/>
                    {/*<ListItems listItems={this.localService.getAllPlanets} getItem={this.getPerson}/>*/}
                    {/*<ListItems listItems={this.localService.getAllVehicles} getItem={this.getPerson}/>*/}
                </div>

                <div className="col-6">
                    {/*<Person person={person}/>*/}

                    <Starship dataId={elementStarId} getData={getStarship} getImage={getStarshipImage}>
                        {/*<StarFields stars={stars} />*/}
                    </Starship>
                </div>
            </div>
        )
    }
}

export default List;