import React from "react"
import {Redirect} from "react-router-dom";


const LoginPage = ({isLogin, onLogin}) => {

    if (isLogin) {
        return <Redirect to='/' />
    }

    return (
        <div className='jumbotron'>
            <h3>You must be logged in to see more</h3>
            <button className='btn btn-primary' onClick={onLogin}>Login</button>
        </div>
    )
}

export default LoginPage