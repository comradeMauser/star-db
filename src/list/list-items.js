import React from 'react';
import "./list-items.css";
import ErrorBoundary from "../services/error-boundary";

class ListItems extends React.Component {
    state = {
        items: [],
    }

    componentDidMount() {
        const {listItems} = this.props;

        //get state [items]
        listItems()
            .then((items) => {
                this.setState({items})
            })
            .catch((err) => console.error(err))
    };


    render() {
        const {getItemId} = this.props
        const {items} = this.state

        const list = items.map(item => {
            return (
                <li key={item.id}
                    className="list-group-item"
                    onClick={() => {
                        getItemId(item.id)
                    }}
                >
                    {item.name}
                </li>
            )
        })

        return (
            <ErrorBoundary>
                <ul className="list-unstyled">
                    {list}
                </ul>
            </ErrorBoundary>
        )
    }
}

export default ListItems;