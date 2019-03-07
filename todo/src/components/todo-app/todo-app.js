import React, {Component} from 'react'
import TodoHeader from '../todo-header';
import SearchPanel from '../todo-searchpanel';
import TodoList from '../todo-list';
import StatusFilter from '../item-status-filter';
import ItemAddPanel from '../item-add-panel';

import './todo-app.css'

export default class TodoApp extends Component {

    minId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.minId++
        }
    };

    getIdx(data, id) {
        return data.findIndex((el) => el.id === id);
    }

    toggleProperty(arr, id, propName) {
        const idx = this.getIdx(arr, id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }


    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = this.getIdx(todoData, id);
            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArr
            }
        });
    };


    addedItem = (text) => {
        const item = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [...todoData, item];
            return {
                todoData: newArr
            }
        })
    };


    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData,id, 'important'),
            }
        });
    };


    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData,id, 'done'),
            }
        });
    };


    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;


        return (
            <div className="todo-app">
                <TodoHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <StatusFilter/>
                </div>

                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddPanel onAdded={this.addedItem}/>
            </div>
        );
    }
}



