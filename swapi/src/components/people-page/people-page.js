import React, {Component} from "react"


import './people-page.css'


import SwapiService from "../../services/getResource";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, PersonList} from "../sw-components";



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
                <PersonList>
                    {({name}) => <span>{name}</span>}
                </PersonList>
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