import React from 'react';
import Loader from "react-loader-spinner";
// import Person from "./details/person";
import Starship from "./details/starship";
import ListItems from "./list-items";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service();

    state = {
        person: {},
        loading: true,
        star: {
            itemListId: 5,
            starFields: ["model", "crew", "cost", "passengers"]
        },
        elementStarId: 0
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
        this.setState({star:{itemListId}})
    }

    render() {
        const {/*person,*/ loading, itemListId,star} = this.state;
        const {/*getAllPersons,*/ getStarship, getStarshipImage} = this.localService
        const stars = ["model", "passengers", "cost", "crew"]

        console.log("star.itemListId",star.itemListId)


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

                    <Starship getData={getStarship}
                              getImage={getStarshipImage}
                              stars={stars}
                              fields={star}
                    />
                </div>
            </div>
        )
    }
}

export default List;