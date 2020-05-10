import React, {Component} from "react"


import './starships-page.css'
import ItemList from "../item-list";

import SwapiService from "../../services/getResource";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {ItemDetails, Record} from "../item-details/item-details";



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
                <ItemList
                    onItemSelected={this.onItemSelected}
                    getData={this.swapi.getAllStarships}>

                    {(i) => (
                        `${i.name} (${i.model})`
                    )}

                </ItemList>
            </ErrorBoundary>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails
                    itemId={this.state.itemSelected}
                    getData={this.swapi.getStarships}
                    getImageUrl={this.swapi.getStarshipImage}
                >
                    <Record field="model" label="Model" />
                    <Record field="manufacturer" label="Manufacturer" />
                    <Record field="length" label="Length" />
                </ItemDetails>
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}