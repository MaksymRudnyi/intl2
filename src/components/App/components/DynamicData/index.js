import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../../Context';

const DynamicData = () => {
    const {state} = useContext(AppContext);
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(`https://api.com?language=${state.locale}`)
        .then(data => {
            setData(`Success: this data should be in ${state.locale} language`)
        })
        .catch((error) => {
            setData(`Error: this data should be in ${state.locale} language`)
        })
    }, [state.locale]);

    return (
        <div>
            <hr/>
            data: {data}
            <hr/>
            <br/>
        </div>
    )
}

export default DynamicData