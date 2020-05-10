import React, {Component} from "react"


import './people-page.css'
import ItemList from "../item-list";

import SwapiService from "../../services/getResource";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {ItemDetails, Record} from "../item-details/item-details";



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
                <ItemList
                    onItemSelected={this.onItemSelected}
                    getData={this.swapi.getAllPeople}>

                    {(i) => (
                        `${i.name} (${i.birthYear})`
                    )}

                </ItemList>
            </ErrorBoundary>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails
                    itemId={this.state.itemSelected}
                    getData={this.swapi.getPerson}
                    getImageUrl={this.swapi.getPersonImage}
                >
                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />
                    <Record field="birthYear" label="Birth Year" />
                </ItemDetails>
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}