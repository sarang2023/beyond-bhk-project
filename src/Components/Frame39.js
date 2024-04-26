import React from "react";
import Slider from "react-slick";

const Frame39 = () => {
  var settings2 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 500,
    nextArrow: <SampleNextArrow3 />,
    prevArrow: <SamplePrevArrow3 />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow3(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "-30px",
          right: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow3(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "-30px",
          left: "93%",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
      <div style={{ backgroundColor: "rgb(245,245,245)" }}>
        <div class="container py-4 questrial-regular">
          <div class="row align-items-start">
            <div class="col ">
              <div class="row">
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card rounded-0 border-0 h-100">
                    <div class="card-body">
                      <h6 class="text-start fw-bold">
                        1211 Sq.Ft Residential Land/Plot for Sale in <br />
                        Gulmohar Colony
                      </h6>
                      <p class="card-text text-start">
                        <i
                          class="bi bi-geo-alt-fill"
                          style={{ color: "rgb(1,96,184)" }}
                        ></i>
                        &nbsp;{" "}
                        <span style={{ color: "rgb(101,100,100)" }}>
                          Gulmohar Colony,Bhopal
                        </span>
                      </p>

                      <p class="card-text text-start lh-1">
                        <i
                          class="fa-sharp fa-solid fa-circle-check"
                          style={{ color: "rgb(1,96,184)" }}
                        ></i>
                        &nbsp; <span>Central air</span>
                      </p>
                      <p class="card-text text-start lh-1">
                        <i
                          class="fa-sharp fa-solid fa-circle-check"
                          style={{ color: "rgb(1,96,184)" }}
                        ></i>
                        &nbsp; <span>Smart Home</span>
                      </p>
                      <p class="card-text text-start lh-1">
                        <i
                          class="fa-sharp fa-solid fa-circle-check"
                          style={{ color: "rgb(1,96,184)" }}
                        ></i>
                        &nbsp; <span>Great Schools</span>
                      </p>

                      <small style={{ color: "rgb(101,100,100)" }}>Price</small>
                      <h5 class="card-text fw-bold">$550,000 Lac</h5>

                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="d-flex flex-row justify-content-between">
                            <div class="">
                              <b> Property Id</b>
                            </div>
                            <div class="">Rp020122</div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="d-flex flex-row justify-content-between">
                            <div class="">
                              <b>Type</b>
                            </div>
                            <div class="">Residential Land/Plot</div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="d-flex flex-row justify-content-between">
                            <div class="">
                              <b>Salable Area</b>
                            </div>
                            <div class="">1211 Sq'Ft'</div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="d-flex flex-row justify-content-between">
                            <div class="">
                              <b>City</b>
                            </div>
                            <div class="">Bhopal</div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="d-flex flex-row justify-content-between">
                            <div class="">
                              <b>Location</b>
                            </div>
                            <div class="">Gulmohar Colony</div>
                          </div>
                        </li>
                        <li class="list-group-item mt-3">
                          <button
                            type="button"
                            class="btn w-100 text-light"
                            style={{ backgroundColor: "rgb(0,202,48)" }}
                          >
                            Book Now
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="">
                    <div class="">
                      <div class="card rounded-3 mb-2 position-relative">
                        <img
                          src="land.jpg"
                          class="card-img-top rounded-3"
                          alt="..."
                          style={{ height: "420px" }}
                        />
                        <div class="card-img-overlay">
                          <h5 class="d-flex justify-content-end">
                            <button
                              type="button"
                              class="btn btn-light btn-sm mx-1"
                            >
                              <i class="bi bi-heart"></i>
                            </button>
                            <button type="button" class="btn btn-light btn-sm">
                              <i class="bi bi-share-fill"></i>
                            </button>
                          </h5>
                          <div
                            class="card-footer text-primary"
                            style={{
                              position: "absolute",
                              top: "60%",
                              right: "0%",
                            }}
                          >
                            <div class="card ">
                              <div class="card-body">
                                <p
                                  class="card-title fw-bold "
                                  style={{ fontSize: "14px" }}
                                >
                                  Video <br />
                                  Walkthrough
                                </p>
                                <div class="d-flex justify-content-end ">
                                  <button type="button" class="btn py-0">
                                    <i
                                      class="bi bi-plus-circle-fill"
                                      style={{
                                        fontSize: "20px",
                                        marginRight: "-17px",
                                        color: "rgb(67,217,104)",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row row-cols-1 row-cols-md-5 g-1">
                        <div class="col">
                          <div class="card h-100 rounded-3">
                            <img
                              src="land.jpg"
                              class="card-img-top rounded-3 h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="card h-100 rounded-3">
                            <img
                              src="land.jpg"
                              class="card-img-top rounded-3 h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="card h-100 rounded-3">
                            <img
                              src="land.jpg"
                              class="card-img-top rounded-3 h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="card h-100 rounded-3">
                            <img
                              src="land.jpg"
                              class="card-img-top rounded-3 h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div
                            class="card rounded-3"
                            style={{ height: "120px" }}
                          >
                            <img
                              src="land.jpg"
                              class="card-img-top rounded-3 h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-3">
            <div class="row align-items-start">
              <div class="col">
                <div class="card pt-2">
                  <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                      >
                        <div class="navbar-nav nav nav-underline">
                          <a
                            class="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Overview
                          </a>
                          <a class="nav-link" href="#">
                            Description
                          </a>
                          <a class="nav-link" href="#">
                            Anenities
                          </a>
                          <a class="nav-link" aria-disabled="true">
                            Location
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container questrial-regular">
          <div class="row align-items-start">
            <div class="col">
              <div class="row mb-5">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card bg-transparent border-0">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">Description</h5>
                      <p class="card-text ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, aspernatur cum. Sequi, rerum!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, aspernatur cum. Sequi, rerum!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, aspernatur cum. Sequi, rerum!
                      </p>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, aspernatur cum. Sequi, rerum!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, aspernatur cum. Sequi, rerum! <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, aspernatur cum. Sequi, rerum!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card h-100 bg-transparent border-0">
                    <div class="card-body">
                      <ul class="list-group list-group-flush fs-5 ">
                        <li class="list-group-item bg-transparent">
                          <div class="d-flex flex-row justify-content-between ">
                            <div class="">Facing</div>
                            <div class="" style={{ color: "rgb(164,165,165)" }}>
                              East
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent">
                          <div class="d-flex flex-row justify-content-between">
                            <div class="">Transaction</div>
                            <div class="" style={{ color: "rgb(164,165,165)" }}>
                              Resale
                            </div>
                          </div>
                          <hr />
                        </li>
                        <div class="card-body">
                          <h5 class="card-title mb-3">SPECIAL HIGHLIGHTS</h5>
                          <p class="card-text text-start lh-1">
                            <span style={{ color: "rgb(164,165,165)" }}>
                              Easy Public transport
                            </span>
                          </p>
                          <p class="card-text text-start lh-1">
                            <span style={{ color: "rgb(164,165,165)" }}>
                              Easy Access to Project-Good Roads to connect
                            </span>
                          </p>
                          <p class="card-text text-start lh-1">
                            <span style={{ color: "rgb(164,165,165)" }}>
                              Peaceful & Pollution free environment
                            </span>
                          </p>
                          <p class="card-text text-start lh-1">
                            <span style={{ color: "rgb(164,165,165)" }}>
                              Highway Nearby
                            </span>
                          </p>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid text-center questrial-regular">
          <div class="row align-items-start">
            <div class="col">
              <div
                class="card text-light rounded-0"
                style={{ backgroundColor: "rgb(45,44,44)" }}
              >
                <div class=" ">
                  <div class="card-body my-4">
                    <h1 class="card-title font-size-interior fw-bold">
                      {" "}
                      Get&nbsp;<i>Directions,</i>and <br /> check it out
                    </h1>
                    <p class="card-text col-sm-4 mx-auto">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, recusandae! Corrupti, esse maiores!
                    </p>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col-sm-8 mx-auto">
                      <div class="card bg-transparent border-0 position-relative">
                        <div class="card-body">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58898.9302057245!2d75.86255530000001!3d22.68422540000001!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713629684632!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className="rounded-5"
                          ></iframe>
                          <div
                            class="card col-sm-3 "
                            style={{
                              position: "absolute",
                              top: "10%",
                              right: "5%",
                            }}
                          >
                            <img
                              src="internal.jpg"
                              class="card-img-top p-2"
                              alt="..."
                            />
                            <div class="card-body">
                              <p class="card-title text-start fw-bold">
                                Seaside Serenity Villa
                              </p>
                              <p
                                class="card-text text-start"
                                style={{ fontSize: "13px" }}
                              >
                                <i
                                  class="bi bi-geo-alt-fill"
                                  style={{ color: "rgb(1,96,184)" }}
                                ></i>
                                <span>California Hills,CA 90210</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="container questrial-regular">
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0">
                  <div class="h1 mt-5 fw-bolder font-size-testimonial mx-2">
                    Related Properties
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container questrial-regular pb-5">
            <div class="row align-items-start">
              <div class="col">
                <div class="row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card border border-0 bg-transparent">
                      <div class="card-body ">
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Minus numquam omnis quibusdam suscipit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row align-items-start">
                <div class="col">
                  <div class="card bg-transparent border border-0">
                    <div class="card-body">
                      <div className="slider-container ">
                        <Slider {...settings2}>
                          <div className="">
                            <div class="card">
                              <img
                                src="home-room.jpg"
                                class="card-img-top"
                                alt="..."
                                style={{ height: "250px" }}
                              />
                              <div class="card-img-overlay">
                                <button
                                  type="button"
                                  class="btn btn-light fw-bold rounded-0"
                                >
                                  $550,000
                                </button>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title fw-bold">
                                  Seaside Serenity Villa
                                </h5>
                                <p class="card-text">
                                  <i
                                    class="bi bi-geo-alt-fill"
                                    style={{ color: "rgb(1,96,184)" }}
                                  ></i>
                                  <span>California Hills,CA 90210</span>
                                </p>
                              </div>
                              <div class=" ">
                                <div class="card-body card-body-1 scale-2">
                                  <div class="d-flex">
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bed"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="">4-Bedroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bath"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>{" "}
                                      <span className="mx-1">3-Bathroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-ruler"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="mx-1">2400 Sq.ft</span>
                                    </div>
                                    <div
                                      class="ms-auto "
                                      style={{ marginTop: "-8%" }}
                                    >
                                      <i
                                        class="bi bi-arrow-right-circle-fill"
                                        style={{
                                          color: "rgb(1,203,48)",
                                          fontSize: "30px",
                                          padding: "0.1rem",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card">
                              <img
                                src="home-room.jpg"
                                class="card-img-top"
                                alt="..."
                                style={{ height: "250px" }}
                              />
                              <div class="card-img-overlay">
                                <button
                                  type="button"
                                  class="btn btn-light fw-bold rounded-0"
                                >
                                  $550,000
                                </button>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title fw-bold">
                                  Seaside Serenity Villa
                                </h5>
                                <p class="card-text">
                                  <i
                                    class="bi bi-geo-alt-fill"
                                    style={{ color: "rgb(1,96,184)" }}
                                  ></i>
                                  <span>California Hills,CA 90210</span>
                                </p>
                              </div>
                              <div class=" ">
                                <div class="card-body card-body-1 scale-2">
                                  <div class="d-flex">
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bed"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="">4-Bedroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bath"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>{" "}
                                      <span className="mx-1">3-Bathroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-ruler"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="mx-1">2400 Sq.ft</span>
                                    </div>
                                    <div
                                      class="ms-auto "
                                      style={{ marginTop: "-8%" }}
                                    >
                                      <i
                                        class="bi bi-arrow-right-circle-fill"
                                        style={{
                                          color: "rgb(1,203,48)",
                                          fontSize: "30px",
                                          padding: "0.1rem",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card">
                              <img
                                src="home-room.jpg"
                                class="card-img-top"
                                alt="..."
                                style={{ height: "250px" }}
                              />
                              <div class="card-img-overlay">
                                <button
                                  type="button"
                                  class="btn btn-light fw-bold rounded-0"
                                >
                                  $550,000
                                </button>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title fw-bold">
                                  Seaside Serenity Villa
                                </h5>
                                <p class="card-text">
                                  <i
                                    class="bi bi-geo-alt-fill"
                                    style={{ color: "rgb(1,96,184)" }}
                                  ></i>
                                  <span>California Hills,CA 90210</span>
                                </p>
                              </div>
                              <div class=" ">
                                <div class="card-body card-body-1 scale-2">
                                  <div class="d-flex">
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bed"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="">4-Bedroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bath"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>{" "}
                                      <span className="mx-1">3-Bathroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-ruler"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="mx-1">2400 Sq.ft</span>
                                    </div>
                                    <div
                                      class="ms-auto "
                                      style={{ marginTop: "-8%" }}
                                    >
                                      <i
                                        class="bi bi-arrow-right-circle-fill"
                                        style={{
                                          color: "rgb(1,203,48)",
                                          fontSize: "30px",
                                          padding: "0.1rem",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card">
                              <img
                                src="home-room.jpg"
                                class="card-img-top"
                                alt="..."
                                style={{ height: "250px" }}
                              />
                              <div class="card-img-overlay">
                                <button
                                  type="button"
                                  class="btn btn-light fw-bold rounded-0"
                                >
                                  $550,000
                                </button>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title fw-bold">
                                  Seaside Serenity Villa
                                </h5>
                                <p class="card-text">
                                  <i
                                    class="bi bi-geo-alt-fill"
                                    style={{ color: "rgb(1,96,184)" }}
                                  ></i>
                                  <span>California Hills,CA 90210</span>
                                </p>
                              </div>
                              <div class=" ">
                                <div class="card-body card-body-1 scale-2">
                                  <div class="d-flex">
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bed"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="">4-Bedroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-bath"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>{" "}
                                      <span className="mx-1">3-Bathroom</span>
                                    </div>
                                    <div class="p-2">
                                      <i
                                        class="fa-solid fa-ruler"
                                        style={{ color: "rgb(1,96,184)" }}
                                      ></i>
                                      <span className="mx-1">2400 Sq.ft</span>
                                    </div>
                                    <div
                                      class="ms-auto "
                                      style={{ marginTop: "-8%" }}
                                    >
                                      <i
                                        class="bi bi-arrow-right-circle-fill"
                                        style={{
                                          color: "rgb(1,203,48)",
                                          fontSize: "30px",
                                          padding: "0.1rem",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame39;
