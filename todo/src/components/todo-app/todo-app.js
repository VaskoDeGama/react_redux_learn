import React from 'react'
import TodoHeader from '../todo-header';
import SearchPanel from '../todo-searchpanel';
import TodoList from '../todo-list';
import StatusFilter from '../item-status-filter'

import './todo-app.css'

const TodoApp= () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 123},
        {label: 'Make awesome app', important: true, id: 124},
        {label: 'Have a lunch', important: false, id: 125},
        
    ]

    return (
        <div className="todo-app">
            <TodoHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <StatusFilter />
            </div>
            
            <TodoList todos = { todoData }  />
        </div>
    );
    

};

export default TodoApp;
