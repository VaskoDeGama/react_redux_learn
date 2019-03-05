import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

import TodoApp from './components/todo-app'

ReactDOM.render(<TodoApp />, 
    document.getElementById('root'));