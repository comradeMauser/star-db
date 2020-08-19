import React from 'react';
import "./list-items.css";

class ListItems extends React.Component {
    state = {
        items: [],
        error: false,
    }

    errCatch = (err) => {
        this.setState({
            error: !this.state.error, loading: false
        });
        console.error("errCatch:", err)
    };

    componentDidMount() {
        const {listItems} = this.props;

        //get state items
        listItems()
            .then((items) => {
                this.setState({items})
            })
            .catch((err) => this.errCatch(err))
    };


    render() {
        const {getItem} = this.props
        const {items} = this.state

        const list = items.map(item => {
            return (
                <li key={item.id}
                    className="list-group-item"
                    onClick={() => {
                        console.log(item.id);
                        getItem(item.id)
                    }}
                >
                    {item.name}
                </li>
            )
        })

        return (
            <ul className="list-unstyled">
                {list}
            </ul>
        )
    }
}

export default ListItems;