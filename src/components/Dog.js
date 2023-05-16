import Table from "./Table";
import React from "react";

export default function Dog(props) {
    let [url, setUrl] = React.useState('');
    const ref = React.useRef(null)
    let fetchDog = () => {
        fetch(`https://dog.ceo/api/breeds/image/random`, {
            method: 'GET',
        }).then(res => res.json()).then(res => setUrl(res.message))
    }
    React.useEffect(() => {
        ref.current = setInterval(fetchDog, 5000);

        return () => {
            if (ref.current) {
                clearInterval(ref.current)
            }
        }

    }, [])
    if (url === '') {
        return <div className="spinner-border" role="status">
        </div>
    }
    return <React.Fragment>
        <div className={"card shadow-lg"}>
            <img src={url} alt={"dog"} className={"rounded shadow-lg"} style={{'maxHeight': 500, 'maxWidth': 500}}/>
        </div>
    </React.Fragment>
}
