import React from 'react';
import Loader from "react-loader-spinner";
// import Person from "./details/person";
import ItemDetails from "./details/itemDetails";
import ListItems from "./list-items";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service();

    state = {
        loading: true,

        person: {
            id: 5,
            fields: ["birth", "eye", "height", "mass"]
        },

        star: {
            id: 5,
            fields: ["model", "crew", "cost", "passengers"]
        },

        planet: {
            id: 5,
            fields: []
        },

        vehicle: {
            id: 5,
            fields: []
        },
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

    getStarId = (id) => {
        const {fields} = this.state.star
        this.setState({star: {id: id, fields: fields}})
    };
    getPersonId = (id) => {
        const {fields} = this.state.person
        this.setState({person: {id: id, fields: fields}})
    }

    render() {
        const {loading, star, person} = this.state;
        const {getStarship, getStarshipImage, getPerson, getPersonImage} = this.localService
        console.debug("star.fields:", star)
        console.log(getPersonImage(5))

        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <div className="row">
                <div className="col-5">
                    List:
                    {/*<ListItems listItems={getAllPersons} getItem={this.getPerson}/>*/}
                    <ListItems listItems={this.localService.getAllStarships} getItem={this.getStarId}/>
                    <ListItems listItems={this.localService.getAllPersons} getItem={this.getPersonId}/>
                </div>

                <div className="col-6">

                    <ItemDetails getData={getStarship}
                                 getImage={getStarshipImage}
                                 object={star}
                    />

                    <ItemDetails getData={getPerson}
                                 getImage={getPersonImage}
                                 object={person}/>
                </div>
            </div>
        )
    }
}

export default List;