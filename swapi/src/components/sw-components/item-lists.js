import Itemlist from "../item-list";
import {withData, withSwapiService} from "../hoc-helpers/";
import React from "react";


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


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanet
    }
}

const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = withSwapiService(withData(
    withChildFunction(Itemlist, renderName)), mapPersonMethodsToProps)

const PlanetList = withSwapiService(withData(
    withChildFunction(Itemlist, renderName)), mapPlanetMethodsToProps)

const StarshipsList = withSwapiService(withData(
    withChildFunction(Itemlist, renderModelAndName)), mapStarshipsMethodsToProps)


export {
    PersonList,
    PlanetList,
    StarshipsList
};