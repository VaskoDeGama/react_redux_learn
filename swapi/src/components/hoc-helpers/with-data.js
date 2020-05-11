import React, {Component} from "react";
import Preloader from "../preloader";

const withData = (View) => {
    return class extends Component {

        state = {
            data: null
        }

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const {data} = this.state;

            if (!data) {
                return <Preloader/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export default withData