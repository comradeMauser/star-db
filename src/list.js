import React from 'react';
// import ListItem from "./list-item";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service()
    state = {
        persons: [],
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

    render() {
        const {persons} = this.state;
        const main = persons.map(person => {
            return (
                <li key={person.id}
                    className="list-group-item"
                >
                    {person.id} : {person.name},
                </li>
            )
        })

        return (
            <ul className="list-unstyled list-group">
                List:
                {main}
                {/*<ListItem count={0}/>*/}
                {/*<ListItem count={1}/>*/}
                {/*<ListItem count={2}/>*/}
                {/*<ListItem count={3}/>*/}
                =========
            </ul>
        )
    }
}

export default List;