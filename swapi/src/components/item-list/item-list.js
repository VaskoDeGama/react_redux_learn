import React, {Component} from "react"

import './item-list.css'
import SwapiService from "../../services/getResource";
import Preloader from "../preloader";


export default class Itemlist extends Component {

    swapi = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapi
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }

    render() {
        const {peopleList} = this.state;

        if (!peopleList) {
            return <Preloader/>
        }

        const items = this.renderItems(peopleList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}


