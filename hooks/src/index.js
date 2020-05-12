import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';

const Context = React.createContext('Hello', undefined);

const App = () => {

    return (
        <Context.Provider value={'Hello world'} >
            <Child />
        </Context.Provider>
        )
}


const Child = () => {
    const text = useContext(Context)
    return (
        <h2>{text}</h2>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


