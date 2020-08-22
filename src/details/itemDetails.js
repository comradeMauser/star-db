import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import ErrorBoundary from "../services/error-boundary";
import Service from "../services/service";
import Fields from "../fields";
import "./person.css"

class ItemDetails extends Component {
    localService = new Service();

    state = {
        data: {},
        image: null,
        loading: true,
    };

    componentDidMount() {
        const {getData, getImage, object: {id}} = this.props

        getData(id)
            .then((data) => {
                this.setState({data})
            });
        this.setState({image: getImage(id)})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {object: {id}, getData} = this.props

        if (this.props.object.id !== prevProps.object.id) {
            getData(id)
                .then((data) => {
                    this.setState({data})
                });
            this.setState({image: this.localService.getStarshipImage(id)})
        }
    }


    render() {
        const {data, image} = this.state
        const {object:{fields}}=this.props

        if (!data.id) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <ErrorBoundary>
                class Starship
                <div className="person row">
                    <Fields data={data} fields={fields}/>

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

export default ItemDetails;