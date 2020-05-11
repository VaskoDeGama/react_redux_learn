import React from "react";
import {ItemDetails, Record} from "../item-details/";
import {SwapiServiceConsumer} from "../swapi-service-context";


const PersonDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
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
            }

        </SwapiServiceConsumer>
    )
}

const  StarshipDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getStarships, getStarshipImage}) => {
                    return (
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
            }
        </SwapiServiceConsumer>
    )
}
const PlanetDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer> {
            ({getPlanet, getPlanetImage}) => {
                return (
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
        }

        </SwapiServiceConsumer>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};