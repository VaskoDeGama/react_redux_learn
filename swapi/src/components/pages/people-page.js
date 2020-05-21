import React from 'react'
import {PersonList, PersonDetails} from "../sw-components"
import {withRouter} from 'react-router-dom'
import Row from '../row'

const PeoplePage = ({history, match}) => {

        return (
            <Row
                left={<PersonList onItemSelected={(itemId) => history.push(itemId)}/>}
                right={<PersonDetails itemId={match.params.id}/>}
            />
        )

}

export default withRouter(PeoplePage)