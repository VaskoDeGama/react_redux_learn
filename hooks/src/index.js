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
                        setValue(v => v+1)
                    }}
                >+</button>
                <button
                    onClick={() => {
                        setVisible(false)
                    }}
                >hide</button>
                <HookCounter value={value}/>
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


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


