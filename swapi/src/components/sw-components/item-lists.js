import Itemlist from "../item-list";
import {withData} from "../hoc-helpers/";
import SwapiService from "../../services/swapi-service";
import React from "react";

const swapi = new SwapiService()

const {
    getAllPeople,
    getAllPlanet,
    getAllStarships
} = swapi

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}


const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({name, model}) => <span>{`${name}, (${model})`}</span>


const PersonList = withData(
    withChildFunction(Itemlist, renderName),
    getAllPeople
)
const PlanetList = withData(
    withChildFunction(Itemlist, renderName),
    getAllPlanet
)
const StarshipsList = withData(
    withChildFunction(Itemlist, renderModelAndName),
    getAllStarships
)


export {
    PersonList,
    PlanetList,
    StarshipsList
};