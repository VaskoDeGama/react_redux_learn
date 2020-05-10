import React, {Component} from "react"

import './item-list.css'
import SwapiService from "../../services/getResource";
import Preloader from "../preloader";


export default class Itemlist extends Component {

    swapi = new SwapiService();

    state = {
        itemList: null
    }

    componentDidMount() {

        const {getData} = this.props
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Preloader/>
        }

        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}


