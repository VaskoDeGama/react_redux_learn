
import React from "react";
import {ItemDetails, Record} from "../item-details/";
import SwapiService from "../../services/getResource";



const swapi = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarships,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapi


const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
        >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth Year" />
        </ItemDetails>
    )
}

const  StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails
            itemId={itemId}
            getData={getStarships}
            getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="length" label="Length" />
        </ItemDetails>
    )
}
const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}