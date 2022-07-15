import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useRequestData(url) {

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setIsLoading(false)
                setData(res.data.trips)
                
            }).catch((error) => {
                setIsLoading(false)
                setError(error)
            });
    }, [url]);


    

    return [data, isLoading, error]
}