import React, {Component} from "react"

import './error-boundary.css'
import ErrorIndicator from "../components/error-indicator";

export default class ErrorBoundary extends Component{

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children
    }

}