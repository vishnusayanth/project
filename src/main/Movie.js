import Table from "../components/Table";
import React from "react";

export default function Movie(props) {
    let [spinner, setSpinner] = React.useState(false);
    let [secondSpinner, setSecondSpinner] = React.useState(false);
    let [searchText, setSearchText] = React.useState('');
    let [selectedMovie, setSelectedMovie] = React.useState(null);
    let [typeOfMedia, setTypeOfMedia] = React.useState('movie');
    let tableHead = ['Title', 'Type', 'Year'];
    let [tableBody, setTableBody] = React.useState([]);
    const API_KEY = '1a5d9d22';
    let setMovie = movie => {
        setSecondSpinner(true);
        fetch('https://www.omdbapi.com/?i=' + movie.imdbID + '&apikey=' + API_KEY, {
            method: 'GET',
        }).then(res => res.json()).then(res => setSelectedMovie(res)).finally(() => setSecondSpinner(false))
    }
    let changeMedia = (event) => {
        if (event.target.value === 'on') {
            setTypeOfMedia('series')
        } else {
            setTypeOfMedia('movie')
        }
    }
    let searchMedia = () => {
        setSpinner(true);
        fetch(`https://www.omdbapi.com/?s=${searchText}&type=${typeOfMedia}&apikey=${API_KEY}`, {
            method: "GET",
        }).then(res => res.json()).then(res => {
            if (res.Search) {
                setTableBody(res.Search);
            } else {
                alert(res.Error)
            }
        }).finally(() => setSpinner(false));
    }
    React.useEffect(() => {
        props.setPageTitle('Movies');
    }, []);

    return <React.Fragment>
        <div className="row mb-3 align-left">
            <div className="col-sm-7">
                <input type="text" placeholder={"Search for title"} className={"form-control"}
                    defaultValue={searchText} onChange={event => setSearchText(event.target.value)} />
            </div>

            <div className="col-sm row d-flex">

                <button className={"btn btn-sm btn-primary"} onClick={() => searchMedia()}>
                    Search
                </button>
            </div>
            <div className="col-sm-2">
                <div className="form-check form-switch" title="Turn on if searching for series.">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                        onChange={(event) => changeMedia(event)} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><small>series?</small></label>
                </div>

            </div>

        </div>


        <div className={"row d-flex"}>
            <div className="col-12 overflow-auto" style={{ 'height': 450 }}>
                <div className="card recent-sales overflow-auto">
                    <div className="card-body table-responsive">
                        <small>Select a movie to view details</small>
                        <br />
                        {spinner &&
                            <div className="spinner-border" role="status">
                            </div>
                        }
                        {!spinner &&
                            <Table tableHead={tableHead} keyProp={'imdbID'} tableBody={tableBody} tableId={'movies'}
                                toggleModal={true} onClickFunction={setMovie} />}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="disablebackdrop" tabIndex="-1" data-bs-backdrop="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{selectedMovie && selectedMovie.Title}</h5>
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
                                    <br />
                                    <small>Select a movie to view details</small>
                                </center>}
                                {selectedMovie && <div className="card-body">
                                    <div className="card">
                                        <br />
                                        <center>
                                            <img src={selectedMovie.Poster} className="card-img-top rounded shadow-lg"
                                                alt="poster"
                                                style={{ 'height': 200, 'width': 200 }} />
                                        </center>
                                        <div className="card-body">
                                            <h5 className="card-title">{selectedMovie.Title} - {selectedMovie.Year}</h5>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Actors</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Actors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Awards</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Awards}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Country</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Country}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Director</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Director}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Genre</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Genre}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Language</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Language}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Plot</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Plot}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rated</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Rated}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Released</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Released}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Runtime</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.Runtime}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>imdbRating</td>
                                                        <td>&nbsp;:&nbsp;</td>
                                                        <td>{selectedMovie.imdbRating}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}