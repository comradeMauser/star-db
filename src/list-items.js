import React from 'react';
import "./list-items.css";

class ListItems extends React.Component {
    state = {
        items: []
    }


    componentDidMount() {
        const {listItems} = this.props;

        listItems()
            .then((items) => {
                this.setState({items})
            })
            // .catch((err) => this.errCatch(err))
    };


    render() {
        const {func} = this.props
        const {items} = this.state

        const list = items.map(item => {
            return (
                <li key={item.id}
                    className="list-group-item"
                    onClick={() => {
                        console.log(item.id);
                        func(item.id)
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