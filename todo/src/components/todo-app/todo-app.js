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
        ],
        search: '',
        filter: 'all'
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

    itemSearch = (arr, search) => {
        if (search.length === 0) {
            return arr
        }
        return arr.filter(item => item.label.toLocaleLowerCase().includes(search.toLowerCase()));
    };

    itemFilter = (arr, filter) => {
        switch (filter) {
            case 'active':
                return arr.filter(item => item.done === false);
            case 'done':
                return arr.filter(item => item.done === true);
            default:
                return arr
        }
    };

    onSearchChange = (search) => {
        this.setState({search})
    };
    onFilterChange = (filter) => {
        this.setState({filter})
    };


    render() {
        const {todoData, search, filter} = this.state;
        const visibleItem = this.itemFilter(this.itemSearch(todoData, search), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;


        return (
            <div className="todo-app">
                <TodoHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange = {this.onSearchChange}/>
                    <StatusFilter onFilterChange = {this.onFilterChange} filter = {filter}/>
                </div>

                <TodoList todos={visibleItem}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddPanel onAdded={this.addedItem}/>
            </div>
        );
    }
}



