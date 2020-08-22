import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import ErrorBoundary from "../services/error-boundary";
import Fields from "../fields";
import "./item.css"

class ItemDetails extends Component {

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
        const {object: {id}, getData, getImage} = this.props

        if (this.props.object.id !== prevProps.object.id) {
            getData(id)
                .then((data) => {
                    this.setState({data})
                });
            this.setState({image: getImage(id)})
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
                <div className="item row">
                    <Fields data={data} fields={fields}/>

                    <figure className="item-figure col-3">
                        <img className="item-img"
                             src={image}
                             alt="person"/>
                    </figure>
                </div>
            </ErrorBoundary>
        );
    }
}

export default ItemDetails;