import React from 'react';
import Loader from "react-loader-spinner";
import ItemDetails from "./details/itemDetails";
import ListItems from "./list-items";
import Row from "./services/row";
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
        const {getAllStarships, getStarship, getStarshipImage, getAllPersons, getPerson, getPersonImage} = this.localService

        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <div className="container row">

                <Row left={
                    <ListItems listItems={getAllStarships} getItem={this.getStarId}/>
                }
                     right={
                         <ItemDetails getData={getStarship}
                                      getImage={getStarshipImage}
                                      object={star}
                         />
                     }
                />


{/*
                <div className="col-5">
                    List:
                    <ListItems listItems={getAllPersons} getItem={this.getPerson}/>
                    <ListItems listItems={getAllStarships} getItem={this.getStarId}/>
                    <ListItems listItems={getAllPersons} getItem={this.getPersonId}/>
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

*/}

            </div>

        )
    }
}

export default List;