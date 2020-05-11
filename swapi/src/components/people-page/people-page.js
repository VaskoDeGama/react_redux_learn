import React, {Component} from "react"


import './people-page.css'


import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, PersonList} from "../sw-components";
import StarshipDetails from "../sw-components/starships-details";
import PlanetDetails from "../sw-components/planet-details";


export default class PeoplePage extends Component {
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
                <PersonList/>
            </ErrorBoundary>
        );

        const itemDetails = (
            <ErrorBoundary>
                <PersonDetails itemId={11} />

            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={itemDetails} />
        )
    }
}