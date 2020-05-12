import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => {
                        setValue(v => v + 1)
                    }}
                >+
                </button>
                <button
                    onClick={() => {
                        setVisible(false)
                    }}
                >hide
                </button>
                <HookCounter value={value}/>
                <PlanetInfo id={value + 1}/>
                <HookPopUp value={value}/>


            </div>
        )
    } else {
        return <button
            onClick={() => {
                setVisible(true)
            }}
        >Show</button>
    }

}


const HookCounter = ({value}) => {

    useEffect(() => {
        console.log('mount')
        return () => console.log('unmount')
    }, [])

    useEffect(() => {
        console.log('update')
    }, [value])


    return <p>{value}</p>
}


const HookPopUp = () => {

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 5000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div>
            {visible && <p>Hello</p>}
        </div>
    )

}

const usePlanetInfo = (id) => {
    const [planetName, setPlanetName] = useState('none')
    useEffect(() => {
        let cencelled = false
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(res => res.json())
            .then(data => !cencelled && setPlanetName(data.name))
        return () => cencelled = true
    }, [id])

    return planetName
}

const PlanetInfo = ({id}) => {

    const name = usePlanetInfo(id)
    return (
        <div>{id} - {name}</div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


