import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const VideoContext = React.createContext();

export const VideoProvider = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData(){
            const res = await axios.get("http://localhost:8762/videos");
                setData(res.data);
        }
        getData();
    },[])

    console.log(data);
    return (
        <VideoContext.Provider value={data}>
            {props.children}
        </VideoContext.Provider>
    )
}
