import Table from "../components/Table";
import React from "react";

export default function Error(props) {
    React.useEffect(() => {
        props.setPageTitle('Error')
    }, null);
    return <React.Fragment>
        <section className="error-404 min-vh-70 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <a className="btn" href="/">Back to home</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </section>
    </React.Fragment>
}