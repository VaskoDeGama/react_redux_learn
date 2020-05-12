import React, {useCallback, useEffect, useMemo, useState} from 'react';
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


const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => data)
}

const useRequest = (request) => {

    const initialState = useMemo(() =>( {
            data: null,
            loading: true,
            error: null
    }), [])

    const [dataState, setDataState] = useState(initialState)

    useEffect(() => {
        setDataState(initialState)
        let cancelled = false
        request()
            .then(data => !cancelled && setDataState({
                data,
                loading: false,
                error: null
            }))
            .catch(error => !cancelled && setDataState({
                data: null,
                loading: false,
                error
            }))
        return () => cancelled = true
    }, [ request, initialState ])

    return dataState
}

const usePlanetInfo = (id) => {

    const request = useCallback(() => getPlanet(id), [id])
    return useRequest(request)
}

const PlanetInfo = ({id}) => {

    const {data, loading,error} = usePlanetInfo(id)
    if (error) {
        return <div>error</div>
    }
    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div>{id} - {data && data.name}</div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


