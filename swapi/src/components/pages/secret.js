import React from "react"
import {Redirect} from "react-router-dom";


const SecretPage = ({isLogin}) => {

    if (!isLogin) {
        return <Redirect to='/login' />
    }

    return (
        <div className='jumbotron'>
            <h2>Very secret page</h2>
        </div>
    )
}

export default SecretPage