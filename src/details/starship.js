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
        const {data, image} = this.state
        // const {id, name, birth, eye, crew, model} = data
        const {id} = data
        const {children} = this.props
        console.log(this.state.data)

        if (!id) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <ErrorBoundary>
                class Starship
                <div className="person row">
                    {/*<ul className="list-group col-6">
                        <li className="list-group-item text-center text-warning"> {name}</li>
                        <li className="list-group-item"> birth: {birth}</li>
                        <li className="list-group-item"> eye: {eye}</li>
                        <li className="list-group-item"> crew: {crew}</li>
                        <li className="list-group-item"> model: {model}</li>
                    </ul>*/}

                    {

                        React.Children.map(children, (element)=>{
                            return React.cloneElement(element, {data})
                        })

                    }

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