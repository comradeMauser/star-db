import React from 'react';
import Person from "./details/person";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service()
    state = {
        persons: [],
        person: {},
        loading: false,
        error: false
    }

    errCatch = (err) => {
        this.setState({
            error: !this.state.error, loading: false
        });
        console.error("errCatch:", err)
    };

    componentDidMount() {
        this.localService.getAllPersons()
            .then((persons) => {
                this.setState({persons})
            }).catch((err) => this.errCatch(err));
        console.debug("mounted")
    }

    getPerson = (id) => {
        this.localService.getPerson(id)
            .then((person) => {
                this.setState({person})
            })
        console.log("person:", this.state.person)
    }

    render() {
        const {persons, person} = this.state;
        const main = persons.map(person => {
            return (
                <li key={person.id}
                    className="list-group-item"
                    onClick={() => {
                        console.log(person.id);
                        this.getPerson(person.id)
                    }}
                >
                    {person.id} : {person.name}
                </li>
            )
        })


        return (
            <div className="list row">
                <ul className="list-unstyled list-group col-5">
                    List:
                    {main}
                    =========
                </ul>
                <div className="col-6">
                    Person info:
                    <Person person={person}/>
                </div>
            </div>

        )
    }
}

export default List;