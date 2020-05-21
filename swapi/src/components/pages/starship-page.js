import React from 'react'
import {StarshipsList} from "../sw-components";
import {withRouter} from 'react-router-dom'

const StarshipPage = ({history}) => {


        return (
            <StarshipsList
                    onItemSelected={(itemId) => {
                        const newPath = `/starships/${itemId}`
                        history.push(newPath)
                    }}
            />
        )


}

export default withRouter(StarshipPage)