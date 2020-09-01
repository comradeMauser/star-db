import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import ErrorBoundary from "../services/error-boundary";
import Fields from "./fields";
import "./itemDetails.css"

class ItemDetails extends Component {

    state = {
        data: {},
        image: null,
        loading: true,
    };

    componentDidMount() {
        const {getData, getImage, itemId} = this.props

        getData(itemId)
            .then((data) => {
                this.setState({data})
            });
        this.setState({image: getImage(itemId)})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {itemId, getData, getImage} = this.props

        if (this.props.itemId !== prevProps.itemId) {
            getData(itemId)
                .then((data) => {
                    this.setState({data})
                });
            this.setState({image: getImage(itemId)})
        }
    }


    render() {
        const {data, image} = this.state
        const {fields}=this.props

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
                             alt="something wrong :)"/>
                    </figure>
                </div>
            </ErrorBoundary>
        );
    }
}

export default ItemDetails;