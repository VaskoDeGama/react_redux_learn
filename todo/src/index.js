import React from 'react';
import ReactDOM from 'react-dom';

const LoginBox = () => {
    return (
        <span className="login">loginBox</span>
    );
}

const App = () => {

    return (
        <div>
            <h1>Header</h1>
            <LoginBox />
        </div>
    );
    

};



ReactDOM.render(<App />, document.getElementById('root'));