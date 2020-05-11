import React, {Component} from 'react';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import ErrorButton from "./components/error-button";
import PeoplePage from "./components/people-page";
import SwapiService from "./services/swapi-service";
import {SwapiServiceProvider} from "./components/swapi-service-context";
import ErrorBoundary from "./components/error-boundary";

export default class App extends Component {

    swapi = new SwapiService()

    state = {
        showRandomPlanet: true,
    }

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet
        })
    }


    render() {

        const {showRandomPlanet} = this.state
        const randomPlanet =  showRandomPlanet ? <RandomPlanet /> : null

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapi}>
                    <div className="container">
                        <Header/>
                        { randomPlanet }

                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <button
                                    type="button"
                                    className="btn btn-warning mr-2"
                                    onClick={this.toggleRandomPlanet}
                                >Toggle Random Planet</button>
                                <ErrorButton />
                            </div>
                        </div>


                        <PeoplePage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }

}


