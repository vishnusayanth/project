import Table from "../components/Table";
import React from "react";

export default function Geography(props) {
    // crossorigin="anonymous"
    const token = process.env.REACT_APP_AUTH_TOKEN;
    let [spinner, setSpinner] = React.useState(true);
    let [secondSpinner, setSecondSpinner] = React.useState(false);
    let [tableBody, setTableBody] = React.useState([]);
    let tableHead = ['name', 'continent_name', 'capital', 'official_language', 'country_code', 'iso_code',];
    const [selectedCountry, setSelectedCountry] = React.useState(null);
    const [flag, setFlag] = React.useState('');
    const [flagSrcSet, setFlagSrcSet] = React.useState('');
    let baseUrl = 'https://python.vishnusayanth.com/api';
    let [states, setStates] = React.useState([]);
    let searchCountry = (searchText) => {
        let table = document.getElementById("countries");
        searchText = searchText.toLowerCase();
        for (let i in table.rows) {
            if (i !== '0') {
                let row = table.rows[i];
                let found = false;
                for (let j in row.cells) {
                    let col = row.cells[j]
                    if (col.innerHTML) {
                        if (col.innerHTML.toLowerCase().includes(searchText)) {
                            found = true;
                        }
                    }
                }
                if (row.style && row !== 233) {
                    if (found) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            }
        }
    }
    let setCountry = country => {
        let tempIso = country.iso_code.split('/')[0].replace(' ', '').toUpperCase();
        setSelectedCountry(country);
        setStates([]);
        setFlag(`https://flagsapi.com/${tempIso}/shiny/64.png`);
        setFlagSrcSet(`https://flagsapi.com/${tempIso}/shiny/64.png`);
        setSecondSpinner(true)
        fetch(`${baseUrl}/states/${country.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        }).then(res => res.json()).then(res => setStates(res.states)).finally(() => setSecondSpinner(false));
    }
    React.useEffect(() => {
        fetch(`${baseUrl}/countries/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        }).then(res => res.json()).then(res => {
            setTableBody(res.countries);
            setSpinner(false);
        })
        props.setPageTitle('Geography')
    }, []);
    if (spinner) {
        return <React.Fragment>
            <div className="spinner-border" role="status">
            </div>
            <small>Hold on a minute...</small>
        </React.Fragment>
    }
    return <React.Fragment>
        <div className="col-12 overflow-auto" style={{ 'height': 480 }}>
            <div className="card recent-sales overflow-auto">
                <div className="card-body table-responsive">
                    <br />
                    <input type="text" placeholder={"Search for country"} className={"form-control shadow-sm"}
                        onChange={event => searchCountry(event.target.value)} />
                    <small>Select a country to view details</small>
                    <Table tableHead={tableHead} keyProp={'id'} tableId={'countries'} tableBody={tableBody}
                        toggleModal={true}
                        onClickFunction={setCountry} />
                </div>
            </div>
        </div>

        <div className="modal fade" id="disablebackdrop" tabIndex="-1" data-bs-backdrop="false">
            <div className="modal-dialog">
                {selectedCountry && <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">States in {selectedCountry.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="overflow-auto" style={{ 'height': 450 }}>
                            {secondSpinner && <center>
                                <br />
                                <br />
                                <br />
                                <div className="spinner-border" role="status"></div>
                                <small>Hold on again. <i class="bi bi-emoji-smile"></i></small>
                                <br />

                            </center>}
                            {states.length > 0 && <div className="card-body">
                                <br />
                                <center>
                                    <img src={flag} srcSet={flagSrcSet} className="card-img-top" alt="flag"
                                        style={{ 'height': 130, 'width': 150 }} />
                                </center>
                                <br />
                                <div className="card-body">
                                    <Table tableHead={['name']} keyProp={'name'} tableBody={states}
                                        tableId={'states'}
                                        onClickFunction={function () {
                                            return false;
                                        }} />
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>}
            </div>
        </div>

    </React.Fragment>
}
