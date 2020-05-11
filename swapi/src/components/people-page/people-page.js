import React, {Component} from "react"
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList} from "../sw-components";

import './people-page.css'





export default class PeoplePage extends Component {

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