import React, {Component} from "react"


import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/getResource";
import Row from "../row";
import ErrorBoundary from "../../error-boundary";



export default class PeoplePage extends Component {
    swapi = new SwapiService()

    state = {
        itemSelected: 3,

    }

    onItemSelected = (itemSelected) => {
        this.setState({itemSelected})
    }



    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapi.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.itemSelected}/>
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}