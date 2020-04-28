import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    state = {
        filter: ''
    };

    buttons = [
        {name: 'all' , label: 'All'},
        {name: 'done' , label: 'Done'},
        {name: 'active' , label: 'Active'},
    ];



    render () {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const actBtnClazz = isActive? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                        className={`btn ${actBtnClazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}
                >{label}</button>
            )
        });




        return (
                <div className="btn-group">
                    {buttons}
                </div>
            )

    };
};