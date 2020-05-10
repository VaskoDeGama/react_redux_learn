import React, {Component} from "react"

import './person-details.css'
import SwapiService from "../../services/getResource";
import Preloader from "../preloader";
import ErrorButton from "../error-button";


export default class PersonDetails extends Component {

    swapi = new SwapiService()

    state = {
        person: null,
        loading: false
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }


    updatePerson() {
        this.setState({loading: true})
        const {personId} = this.props
        if (!personId) {
            this.setState({loading: false})
            return
        }

        this.swapi
            .getPerson(personId)
            .then((person) => {
                this.setState({person})
            })
            .finally(() => {
                this.setState({loading: false})
            })

    }

    render() {
        const {person, loading} = this.state


        if (!person) {
            return <span>Select a person from a list</span>
        }

        const {id, name, gender, birthYear, eyeColor} = person
        if (!loading) {
            return (
                <div>
                    <div className="person-details card">
                        <img className="person-image"
                             alt="img"
                             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

                        <div className="card-body">
                            <h4>{name}</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="term">Gender:</span>
                                    <span>{gender}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Birth Year:</span>
                                    <span>{birthYear}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Eye Color:</span>
                                    <span>{eyeColor}</span>
                                </li>
                            </ul>

                        </div>
                        <ErrorButton/>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="person-details card">
                    <Preloader/>
                </div>
            </div>
        )

    }
}

