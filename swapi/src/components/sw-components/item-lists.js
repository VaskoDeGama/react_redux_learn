import Itemlist from "../item-list";
import {withData, withSwapiService, withChildFunction, compose} from "../hoc-helpers/";
import React from "react";



const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({name, model}) => <span>{`${name}, (${model})`}</span>


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(Itemlist)

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(Itemlist)

const StarshipsList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderModelAndName)
)(Itemlist)

export {
    PersonList,
    PlanetList,
    StarshipsList
};