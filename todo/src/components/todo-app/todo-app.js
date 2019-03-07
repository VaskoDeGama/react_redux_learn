import React, {Component} from 'react'
import TodoHeader from '../todo-header';
import SearchPanel from '../todo-searchpanel';
import TodoList from '../todo-list';
import StatusFilter from '../item-status-filter'

import './todo-app.css'

export default class TodoApp extends Component {
    state = {
        todoData : [
            {label: 'Drink coffee', id: 123},
            {label: 'Make awesome app', id: 124},
            {label: 'Have a lunch', id: 125},

        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }
        });
    };


    render() {
        const {todoData} = this.state;
        console.log(todoData);
        return (
            <div className="todo-app">
                <TodoHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <StatusFilter />
                </div>

                <TodoList todos = { todoData  } onDeleted = {this.deleteItem} />
            </div>
        );
    }
}



