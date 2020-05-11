import React, {Component} from 'react'
import {StarshipsList, StarshipDetails} from "../sw-components";
import Row from '../row'

export default class StarshipPage extends Component{

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state
        return (
            <Row
                left={<StarshipsList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem}/>}
            />
        )
    }

}

