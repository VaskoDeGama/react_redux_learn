
import Itemlist from "../item-list";
import {withData} from "../hoc-helpers/";
import SwapiService from "../../services/getResource";

const swapi = new SwapiService()

const {
    getAllPeople,
    getAllPlanet,
    getAllStarships
} = swapi

const PersonList = withData(Itemlist, getAllPeople)
const PlanetList = withData(Itemlist, getAllPlanet)
const StarshipsList = withData(Itemlist, getAllStarships)


export {
    PersonList,
    PlanetList,
    StarshipsList
}