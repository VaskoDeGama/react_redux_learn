import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import TodoHeader from './components/todo-header';
import SearchPanel from './components/todo-searchpanel';
import TodoList from './components/todo-list';
import StatusFilter from './components/item-status-filter'

import './index.css'




const App = () => {

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



ReactDOM.render(<App />, 
    document.getElementById('root'));