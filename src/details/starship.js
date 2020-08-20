import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import ErrorBoundary from "../services/error-boundary";
import Service from "../services/service";

class Starship extends Component {
    localService = new Service();

    state = {
        data: {},
        image: null,
        loading: true,
    };


    componentDidMount() {
        const {dataId, getData, getImage} = this.props
        getData(dataId)
            .then((data) => {
                this.setState({data})
            });
        this.setState({image: getImage(dataId)})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.dataId !== prevProps.dataId) {
            const {dataId, getData} = this.props
            getData(dataId)
                .then((data) => {
                    this.setState({data})
                });
            this.setState({image: this.localService.getStarshipImage(dataId)})
        }
    }

    render() {
        const {data: {id, name, birth, eye, height, mass}, image} = this.state
        console.log(this.state.data)

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
                             src={image}
                             alt="person"/>
                    </figure>
                </div>
            </ErrorBoundary>
        );
    }
}

export default Starship;