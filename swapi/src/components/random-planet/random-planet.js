import React, {Component} from "react"
import SwapiService from "../../services/getResource"

import './random-planet.css'
import Preloader from "../preloader";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapi = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false,
        image: null
    }



    componentDidMount() {
        this.upDatePlanet()
        this.interval = setInterval(this.upDatePlanet, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    upDatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 3);
        this.swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
            .finally(( )=> {
                this.setState({
                    image: this.swapi.getPlanetImage(this.state.planet)
                })

            })
    }

    render() {

        const { planet, loading, error , image } = this.state


        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null
        const preloader = loading ? <Preloader /> : null
        const content = hasData ? <PlanetView planet={planet} image={image}/> : null

        return (
            <div className="random-planet jumbotron rounded mb-2">
                {errorMessage}
                {preloader}
                {content}
            </div>
        )
    }
}

const PlanetView = ({planet, image}) => {
    const {name, population, rotationPeriod, diameter} = planet


    return (
        <React.Fragment>
            <img className="planet-image"
                 alt="img"
                 src={image} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span >{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}