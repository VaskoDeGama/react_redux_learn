import React, {Component} from 'react';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import SwapiService from "./services/swapi-service";
import TestSwapiService from "./services/test-swapi-service";
import {SwapiServiceProvider} from "./components/swapi-service-context";
import ErrorBoundary from "./components/error-boundary";
import {LoginPage, PeoplePage, PlanetPage, StarshipPage, SecretPage} from "./components/pages";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import StarshipDetails from "./components/sw-components/starships-details";


export default class App extends Component {


    state = {
        swapiService: new SwapiService(),
        isLogin: false
    }

    onLogin = () => {
        this.setState({
            isLogin: true
        })
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

        const {swapiService, isLogin} = this.state

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <div className="container">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path='/'
                                       render={() => <h2>Welcome to SWAPI </h2>}
                                       exact
                                />
                                <Route path='/people/:id?' component={PeoplePage}/>
                                <Route path='/planets' component={PlanetPage}/>
                                <Route path='/login'
                                       render={() => {
                                           return <LoginPage
                                               isLogin={isLogin}
                                               onLogin={this.onLogin}/>
                                       }}/>
                                <Route path='/secret' render={() => <SecretPage isLogin={isLogin}/>}/>
                                <Route path='/starships' exact component={StarshipPage}/>
                                <Route path='/starships/:id' render={({match}) => {
                                    return <StarshipDetails itemId={match.params.id}/>
                                }}/>
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }

}


