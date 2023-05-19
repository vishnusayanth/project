import React from "react";

export default function Home() {
    return <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid" data-aos="fade-up">

            <div className="row justify-content-center">
                <div className="container-fluid" style={{ "width": "90%" }}>
                    <nav className="nav nav-pills flex-column flex-sm-row" id="myTab" role="tablist">
                        <a className="flex-sm-fill text-sm-center nav-link btn-outline-primary" id="api-tab"
                            data-bs-toggle="tab" href="#api"
                            role="tab" aria-controls="api"
                            aria-selected="true">Locations API</a>

                        <a className="flex-sm-fill text-sm-center nav-link active btn-outline-primary" id="features-tab" data-bs-toggle="tab"
                            href="#features"
                            role="tab" aria-controls="features"
                            aria-selected="false">Features</a>

                        <a className="flex-sm-fill text-sm-center nav-link btn-outline-primary" id="technologies-tab"
                            data-bs-toggle="tab"
                            href="#technologies"
                            role="tab" aria-controls="technologies"
                            aria-selected="false">Technology</a>
                    </nav>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="api" role="tabpanel" aria-labelledby="api-tab">
                            <section className="features">
                                <div className="container">
                                    <div className="section-heading">
                                        <center>
                                            <br />
                                            <p className="text-muted">Brief guide on how to use the API.</p>
                                            <hr />
                                        </center>
                                        <div className="text-justify">This django server built by Vishnu Sayanth provides API which includes
                                            fetching lists of Countries,States etc in the form of json response. Only Get requests are
                                            accepted by this API.
                                            This is a public API, hence no authorization is required when sending the requests from your localhost.

                                            <ul>
                                                <li>Please note :</li>
                                                <li>The response is in json format</li>
                                                <li>No authorization or client id is required in the Header of the GET request.</li>
                                                <li>Id mentioned in the sample urls must be replaced by the object's ID which is provided by the application.</li>
                                                <li>Any method other than GET such as POST,PUT & DELETE etc. is not allowed.
                                                </li>
                                            </ul>
                                        </div>
                                        <strong>
                                            Get the list of all countries &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span style={{ "cursor": "pointer" }}
                                                className="badge bg-primary popover-btn" data-bs-trigger="focus"
                                                data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom"
                                                data-bs-content=' {"countries": [{"id": 403,"name": "Afghanistan","official_language": "Pashto","country_code": 93,"iso_code": "AF / AFG","continent_name": "Asia","capital": "Kabul"},"id": 404,"name":"Albania","official_language": "Albanian","country_code": 355,"iso_code": "AL / ALB","continent_name": "Europe","capital": "Tirana District"},]} '>
                                                Sample response
                                            </span>
                                        </strong>
                                        <p><var>https://server.vishnusayanth.com/vishnusayanth/hobby/api/countries/</var></p>
                                        <strong>
                                            Get the list of states in country with id <strong>1</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span style={{ "cursor": "pointer" }}
                                                className="badge bg-primary popover-btn" data-bs-trigger="focus"
                                                data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom"
                                                data-bs-content=' {"country": "Afghanistan","states": [{"name": "Badakhshan"},{"name": "Badghis"},{"name": "Baghlan"},]} '>
                                                Sample response
                                            </span>
                                        </strong>
                                        <p><var>https://server.vishnusayanth.com/vishnusayanth/hobby/api/states/1</var></p>

                                        <br />
                                        <br />
                                        <section className="faq" style={{ "width": "100%" }}>
                                            <div data-aos="fade-up">
                                                <div className="faq-list">
                                                    <ul>
                                                        <li data-aos="fade-up" data-aos-delay="100">
                                                            <a data-bs-toggle="collapse" className="alert alert-light rounded collapsed" title="Click to expand"
                                                                href="#faq-list-1">Python example to use countries API
                                                                <i className="bx bx-chevron-down icon-show"></i>
                                                                <i className="bx bx-chevron-up icon-close"></i>
                                                            </a>
                                                            <div id="faq-list-1" className="collapse" data-parent=".faq-list">
                                                                <div className="p-3 mb-5 bg-light rounded code">
                                                                    <pre>
                                                                        <code>{`import requests`}</code><br />
                                                                        <code>{`url = <above sample url>`}</code><br />
                                                                        <code>{`response = requests.get(url=url)`}</code><br />
                                                                        <code>{`jsonData = response.json()`}</code><br />
                                                                        <code>{`# Play around with jsonData`}</code><br />
                                                                    </pre>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li data-aos="fade-up" data-aos-delay="200">
                                                            <a data-bs-toggle="collapse" href="#faq-list-2"
                                                                title="Click to expand"
                                                                className="collapsed alert alert-light rounded ">Ajax example to use the countries API
                                                                <i className="bx bx-chevron-down icon-show"></i>
                                                                <i className="bx bx-chevron-up icon-close"></i>
                                                            </a>
                                                            <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                                                <div className="p-3 mb-5 bg-light rounded code">
                                                                    <pre>
                                                                        <code>{`<script>`}</code><br />
                                                                        <code>&emsp;{`$(document).ready(function () {`}</code><br />
                                                                        <code>&emsp;&emsp;{`let url = <above sample url>;`}</code><br />
                                                                        <code>&emsp;&emsp;{`$.ajax({`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;{`type: "GET",`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;{`dataType: "json",`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;{`headers: {},`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;{`url: url,`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;{`success: function (data) {`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;&emsp;{`$.each(data.countries, function (i, item) {`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;&emsp;{`let opt_string = '<option value=item.name>item.name<option>';`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;&emsp;{`$('#mySelect').append(opt_string);`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;&emsp;{`})`}</code><br />
                                                                        <code>&emsp;&emsp;&emsp;{`}`}</code><br />
                                                                        <code>&emsp;&emsp;{`})`}</code><br />
                                                                        <code>&emsp;{`});`}</code><br />
                                                                        <code>{`</script>`}</code><br />
                                                                        <code>{`<select id="mySelect">`}</code><br />
                                                                        <code>&emsp;{`<option value="">Select Country</option>`}</code><br />
                                                                        <code>{`</select>`}
                                                                        </code>
                                                                    </pre>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="tab-pane show active" id="features" role="tabpanel" aria-labelledby="features-tab">
                            <section className="features">
                                <div className="container">
                                    <div className="section-heading text-center">
                                        <br />
                                        <p className="text-muted">Check out what's possible on this application.</p>
                                        <hr />
                                        <p className="text-justify">This is a hobby project developed by Vishnu Sayanth, deployed on
                                            Google Cloud platform. Below given are the features developed in this applciation.
                                        </p>
                                        <br />
                                        <div className="shadow-lg p-3 mb-5 bg-light rounded">
                                            <div className="list-group">
                                                <a href="#" className="list-group-item list-group-item-action">
                                                    REST API to get json response of requested data related to geographic
                                                    locations.
                                                </a>
                                                <a href="#"
                                                    className="list-group-item list-group-item-action list-group-item-secondary">
                                                    Interface to search for movies and series built using the API provided by <a target="_blank" href="https://www.omdbapi.com/"> OMDB</a>.
                                                </a>
                                                <a href="#"
                                                    className="list-group-item list-group-item-action">
                                                    View data from the locations API built by Vishnu Sayanth in form of a table (ie; rows & columns).
                                                </a>
                                                <a href="#"
                                                    className="list-group-item list-group-item-action">
                                                    The flag thumbnails are fetched from <a href="https://flagcdn.com" target="_blank"><strong>HERE</strong></a>.
                                                </a>
                                                <a href="#"
                                                    className="list-group-item list-group-item-action list-group-item-secondary">
                                                    Browse snapshots taken by the Mars rover "curiosity" and view the Picture of the day, built using API provided by <a target="_blank" href="https://api.nasa.gov/"> Nasa</a>.
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="tab-pane fade" id="technologies" role="tabpanel" aria-labelledby="technologies-tab">
                            <section className="features">
                                <div className="container">
                                    <div className="section-heading text-center justify-content-around">
                                        <br />
                                        <p className="text-muted">Technologies & Tools used to build this app.</p>
                                        <hr />
                                        <p className="text-justify">This application is built using the <strong>Javascript</strong>
                                            framework, <strong>React JS</strong>(HTML,CSS,Javascript and JQuery).
                                            The backend end is developed using <strong>Python</strong> framework
                                            <strong>Django </strong>.

                                            The CSS framework <strong>Bootstrap</strong>
                                            is used to style the front end of the application.
                                            Locations API is developed using <strong>Django REST framework</strong>
                                            which accesses data in a <strong>MySQL</strong> database.
                                            The application is versioned using GitHub and deployed using the cloud SDK provided
                                            by <strong>Google Cloud</strong>.
                                        </p>
                                        <br />
                                        <div className="row d-flex align-items-center justify-content-center">
                                            <div className="row container">
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/python.png" className="img-fluid" /></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/django.png" className="img-fluid" /></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/mysql.png" className="img-fluid" /></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/gcloud.png" className="img-fluid" /></div>
                                                <div className="col-sm-2"></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/react.png" className="img-fluid" /></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/js.png" className="img-fluid" />                                            </div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/htmlcss.png" className="img-fluid" /></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/bootstrap.png" className="img-fluid" /></div>
                                                <div className="col-sm"><img src="https://career.vishnusayanth.com/assets/img/skills/jquery.png" className="img-fluid" /></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}