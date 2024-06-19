import {useEffect, useState} from "react"

function useCurrrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]) )
        console.log(data);
    }, [currency])
    return data
}

export default useCurrrencyInfo;


// link from
//https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file