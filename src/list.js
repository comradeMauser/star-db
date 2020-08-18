import React from 'react';
import Person from "./details/person";
import ErrorButton from "./services/error-button";
import ErrorIndicator from "./services/error-indicator";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service();

    state = {
        persons: [],
        person: {},
        loading: true,
        error: false
    };

    //creates list with person names
    getList = () => {
        console.log("getList")

        this.localService.getAllPersons()
            .then((persons) => {
                this.setState({persons})
            })
            .catch((err) => this.errCatch(err));
    };

    //updates component 'Person' with new props
    getPerson = (id) => {
        this.localService.getPerson(id)
            .then((person) => {
                this.setState({person})
            })
        console.log("person:", this.state.person)
    };

    errCatch = (err) => {
        this.setState({
            error: !this.state.error, loading: false
        });
        console.error("errCatch:", err)
    };

    componentDidMount() {
        this.getList()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.person.id !== prevState.person.id) {
            this.getPerson(this.state.person.id)
        }
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        const {persons, person, error} = this.state;

        if (error) {
            return <ErrorIndicator/>
        }

        const list = persons.map(person => {
            return (
                <li key={person.id}
                    className="list-group-item"
                    onClick={() => {
                        console.log(person.id);
                        this.getPerson(person.id)
                    }}
                >
                    {person.name}
                </li>
            )
        })

        return (
            <div className="list row">
                <ul className="list-unstyled list-group col-5">
                    {list}
                </ul>
                <div className="col-6">
                    <Person person={person}/>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}

export default List;