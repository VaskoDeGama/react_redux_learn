import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppHeader from './components/todo-header';
import SearchPanel from './components/todo-searchpanel';
import TodoList from './components/todo-list';




const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 123},
        {label: 'Make awesome app', important: true, id: 124},
        {label: 'Have a lunch', important: false, id: 125},
        
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = { todoData }  />
        </div>
    );
    

};



ReactDOM.render(<App />, 
    document.getElementById('root'));