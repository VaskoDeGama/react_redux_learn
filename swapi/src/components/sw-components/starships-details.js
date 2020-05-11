import React from "react";
import {ItemDetails, Record} from "../item-details/";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="manufacturer" label="Manufacturer"/>
            <Record field="length" label="Length"/>
        </ItemDetails>
    )

}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarships,
        getImageUrl: swapiService.getStarshipImage
    }
}


export default withSwapiService(StarshipDetails, mapMethodsToProps);