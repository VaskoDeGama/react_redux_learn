import React, {Component} from "react";

export default class Preloader extends Component {
    render() {
        return (
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
        )
    }
}