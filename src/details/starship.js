import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import ErrorBoundary from "../services/error-boundary";

class Starship extends Component {
    state = {
        data: {},
        loading: true,
    };


    componentDidMount() {
        const {id} = this.props
        this.props.getData(id)
            .then((data) => {
                this.setState({data})
            })
        // console.log("person:", this.state.person)
    };

    render() {
        const {id, name, birth, eye, height, mass} = this.state.data

        if (!id) {
            return <Loader type="Rings" color="yellow"/>
        }

        return (
            <ErrorBoundary>
                class Starship
                <div className="person row">
                    <ul className="list-group col-6">
                        <li className="list-group-item text-center text-warning"> {name}</li>
                        <li className="list-group-item"> birth: {birth}</li>
                        <li className="list-group-item"> eye: {eye}</li>
                        <li className="list-group-item"> height: {height}</li>
                        <li className="list-group-item"> mass: {mass}</li>
                    </ul>
                    <figure className="person-figure col-4">
                        <img className="person-img"
                             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                             alt="person"/>
                    </figure>
                </div>
            </ErrorBoundary>
        );
    }
}

export default Starship;