import React, {Component} from 'react';
import './item-add-panel.css';



export default class ItemAddPanel extends Component {
    render() {
        const { onAdded } = this.props;
        return (
            <div className="item-add-panel d-flex">
                <input className="form-control add-input"
                       placeholder="item"/>
                <button type="button"
                        className="btn btn-outline-info float-right"
                        onClick={() => onAdded('#')}
                >
                    Add item
                </button>
            </div>
        )
    }
}