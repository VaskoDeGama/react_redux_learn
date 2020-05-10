import React, {Component} from "react"


import './starships-page.css'


import SwapiService from "../../services/getResource";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {StarshipDetails, StarshipsList} from "../sw-components";



export default class StarshipsPage extends Component {
    swapi = new SwapiService()

    state = {
        itemSelected: null,

    }

    onItemSelected = (itemSelected) => {
        this.setState({itemSelected})
    }



    render() {

        const itemList = (
                <ErrorBoundary>
                    <StarshipsList>
                        {({name}) => <span>{name}</span>}
                    </StarshipsList>
                </ErrorBoundary>
        );

        const itemDetails = (
            <ErrorBoundary>
                <StarshipDetails itemId={11} />
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={itemDetails} />
        )
    }
}