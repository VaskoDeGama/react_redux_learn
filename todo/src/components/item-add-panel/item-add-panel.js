import React, {Component} from 'react';
import './item-add-panel.css';



export default class ItemAddPanel extends Component {

    state = {
      label: '',
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: '',
        })
    };


    render() {
        return (
            <form className="item-add-panel d-flex" onSubmit={this.onSubmit}>
                <input className="form-control add-input"
                       placeholder="What needs to be done"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
                <button type="submit" className="btn btn-outline-info float-right">
                    Add item
                </button>
            </form>
        )
    }
}