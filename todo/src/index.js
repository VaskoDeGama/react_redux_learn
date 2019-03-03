import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/todo-header';
import SearchPanel from './components/todo-searchpanel';
import TodoList from './components/todo-list';




const App = () => {

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
    

};



ReactDOM.render(<App />, 
    document.getElementById('root'));