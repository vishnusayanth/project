import React from "react";

export default function Nasa(props) {
    let [roverPics, setRoverPics] = React.useState([]);
    let [epicPics, setEpicPics] = React.useState([]);
    let [epicUrl, setEpicUrlState] = React.useState([]);
    const API_KEY = '71pbVoQmLC0Sq48EumwHmT2aiNTu1AxFmQkWR3Wn';
    let [picOfDay, setPicOfDay] = React.useState({});
    let setEpicUrl = () => {
        let item = epicPics[Math.floor(Math.random() * 10)];
        let formattedDate = item.date.split(" ")[0].split("-").join("/");
        let url = `https://api.nasa.gov/EPIC/archive/natural/${formattedDate}/png/${item.image}.png?api_key=${API_KEY}`
        setEpicUrlState(url)
    }

    React.useEffect(() => {
        props.setPageTitle('Nasa');
        document.getElementById('rover-spinner').style.display = '';
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`, {
            method: 'GET',
        }).then(res => res.json()).then(res => {
            const selectedPics = res.photos.length > 20 ?
                res.photos.sort(() => 0.5 - Math.random()).slice(0, 20) :
                res.photos;
            setRoverPics(selectedPics);
        }).then(() => {
            document.getElementById('rover-spinner').style.display = 'none';
        });
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {
            method: 'GET',
        }).then(res => res.json()).then(res => setPicOfDay(res));
        fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`, {
            method: 'GET',
        }).then(res => res.json()).then(res => setEpicPics(res));
    }, []);

    return <React.Fragment>

        <div className="alert alert-warning">
            <small><i><b>It could take a few seconds to load the images.</b></i></small>
        </div>
        <div className="d-flex justify-content-around">
        <div className="col-xxl-3 col-md-5">
            <div className="card info-card sales-card">
                <div className="card-body">
                    <h5 className="card-title">Astronomy Pic <span>| Today</span></h5>

                    <div className="d-flex align-items-center">
                        <div
                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-stars"></i>
                        </div>
                        <div className="ps-3">
                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                                data-bs-target="#picofday">
                                View picture of the day
                            </button>
                            <div className="modal fade" id="picofday" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    {picOfDay && <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">{picOfDay.title}</h5>&nbsp;&nbsp;&nbsp;
                                            <small>{picOfDay.date}</small>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        {picOfDay &&
                                            <div className="modal-body">

                                                {picOfDay.media_type === 'image' &&
                                                    <img src={picOfDay.url} className={"img-fluid"}
                                                        alt={"pic of day"} />}
                                                {picOfDay.media_type === 'video' &&
                                                    <iframe width="420" height="315" className={"img-fluid"}
                                                        src={picOfDay.url}></iframe>
                                                }
                                                <div className="overflow-auto" style={{ 'height': 300 }}>
                                                    {picOfDay.explanation}
                                                </div>
                                            </div>}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="col-xxl-3 col-md-5">
            <div className="card info-card sales-card">
                <div className="card-body">
                    <h5 className="card-title">Curiosity Rover <span>| refresh for new images</span></h5>

                    <div className="d-flex align-items-center">
                        <div
                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-camera"></i>
                        </div>
                        <div className="ps-3">
                            <button type="button" className="btn btn btn-outline-danger" data-bs-toggle="modal"
                                data-bs-target="#rover">
                                View mars snapshots
                            </button>


                        </div>
                        <div className="modal fade" id="rover" tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">

                                {roverPics && <div className="modal-content">
                                    <div className="modal-header">
                                        <h6 className="modal-title">Mars Snapshots</h6>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <small>({roverPics.length})</small>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade"
                                            data-bs-ride="carousel">
                                            <div className="carousel-inner" id={"carousel"}>
                                                <div className="carousel-item active">
                                                    <div className="spinner-border" role="status" id={"rover-spinner"}>
                                                    </div>
                                                </div>
                                                {roverPics.map(pic => {
                                                    return <div key={pic.id} className="carousel-item">
                                                        <img src={pic.img_src} className="d-block w-100"
                                                            alt="pic from rover" />
                                                        <div className="carousel-caption d-none d-md-block">
                                                            <h5>{pic.earth_date}</h5>
                                                            <p>{pic.camera.full_name}</p>
                                                            <p>{pic.rover.name}</p>
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                            <button className="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon"
                                                    aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                <span className="carousel-control-next-icon"
                                                    aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>


                                        </div>
                                    </div>
                                    <div className="modal-footer">

                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

        <center>
            <button type="button" className="btn btn btn-outline-primary" onClick={() => setEpicUrl()} >
                Earth Polychromatic Imaging Camera <strong>(click to refresh)</strong>
            </button>
            <br />
            <br />
            <div className="container container-fluid shadow shadow-lg rounded" style={{ 'width': '450px', 'height': '450px' }}>
                <br />
                {epicUrl && <img className="img-fluid rounded" src={epicUrl} style={{ 'width': '400px', 'height': '400px' }} alt='epic' />}
            </div>
        </center>

    </React.Fragment>
}