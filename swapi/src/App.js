import React, {Component} from 'react';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import SwapiService from "./services/swapi-service";
import TestSwapiService from "./services/test-swapi-service";
import {SwapiServiceProvider} from "./components/swapi-service-context";
import ErrorBoundary from "./components/error-boundary";
import {PeoplePage, PlanetPage, StarshipPage} from "./components/pages";


export default class App extends Component {



    state = {
        swapiService: new SwapiService()
    }


    onServiceChange = () => {
        this.setState(({swapiService}) => {
          const Service = swapiService instanceof SwapiService ?
                            TestSwapiService : SwapiService
            return {
              swapiService: new Service()
            }
        })
    }


    render() {

        const {swapiService} = this.state

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <div className="container">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet  />
                        <PeoplePage/>
                        <StarshipPage/>
                        <PlanetPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }

}


