import React, {Component} from 'react';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import ErrorButton from "./components/error-button";
import ErrorIndicator from "./components/error-indicator";
import PeoplePage from "./components/people-page";


export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet
        })
    }



    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {showRandomPlanet} = this.state
        const randomPlanet =  showRandomPlanet ? <RandomPlanet /> : null
        return (
            <div className="container">
                <Header/>
                { randomPlanet }
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={this.toggleRandomPlanet}
                        >Toggle Random Planet</button>
                        <ErrorButton />
                    </div>

                </div>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }

}


