import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <div>
            <HookSwitcher />
        </div>
        )

}


const HookSwitcher = () => {

    const [bgColor, setBgColor] = useState('white');


    return (
        <div style={{padding: '10px', backgroundColor: bgColor}}>
            <button onClick={() => {setBgColor('grey')}}>Dark</button>
            <button onClick={() => {setBgColor('white')}}>Light</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


