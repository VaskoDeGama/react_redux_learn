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
    const [fontSize, setFontSize] = useState(14)


    return (
        <div style={{padding: '10px', backgroundColor: bgColor, fontSize: `${fontSize}px` }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae dolore dolorem ducimus est id illo
                nemo porro quia quos, recusandae repellendus, sapiente similique totam, veniam? Ab ducimus eaque
                quidem!</p>
            <br/>
            <Person />
            <br/>
            <button onClick={() => {setBgColor('grey')}}>Dark</button>
            <button onClick={() => {setBgColor('white')}}>Light</button>
            <button onClick={() => {setFontSize((s) => s + 1)}}>fontSize ++</button>
            <button onClick={() => {setFontSize((s) => s - 1)}}>fontSize --</button>
        </div>
    )
}


const Person = () => {
    const [firstName, setFirstName] = useState('Vasiliy')
    const [lastName, setLastName] = useState('VaskoDaGama')
    const [person, setPerson] = useState({
        firstNameP: 'Vasiliy',
        lastNameP: 'VaskoDeGama'
    })


    const chengeVaska = (name) => {
        setPerson(p => {return {...p, lastNameP: name}})
    }

    return (
        <div>
            <span>{firstName}  {lastName}    {person.firstNameP + person.lastNameP}</span>
            <br/>
            <button onClick={() => {setLastName('Mabuta')}}> Mabuta</button>
            <button onClick={() => {chengeVaska('KEK')}}> Set Vaska</button>
        </div>

    )


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


