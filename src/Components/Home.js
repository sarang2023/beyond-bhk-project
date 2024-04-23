import React from "react";
import Slider from "react-slick";

const Home = () => {
  var settings1 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
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
  var settings2 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    speed: 500,
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
  var settings4 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 500,
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

  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: "absolute", top: "-30px", right: "25px" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow1(props) {
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

  var settings3 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
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

  return (
    <>
      <div className="container-fluid questrial-regular">
        <div class="container-fluid">
          <div class="row align-items-start">
            <div class="col">
              <div class="row">
                <div class="col-sm-2 mb-3 mb-sm-0 g-0">
                  <div
                    class="card rounded-0"
                    style={{
                      backgroundColor: "rgb(43,125,198)",
                      height: "100%",
                    }}
                  >
                    <div class="card-body d-flex align-items-center">
                      <ul class="nav flex-column w-100">
                        <li
                          class="nav-item text-light nav-items rounded-end-3"
                          style={{ backgroundColor: "rgb(1,203,48)" }}
                        >
                          <a
                            class="nav-link text-light text-center py-2 fs-4 fw-semibold"
                            aria-current="page"
                            href="#"
                          >
                            BUY
                          </a>
                        </li>
                        <li class="nav-item ">
                          <a
                            class="nav-link text-light my-2 nav-items text-center py-2 fs-4 fw-semibold rounded-end-3 border"
                            href="#"
                          >
                            SELL
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-light nav-items text-center py-2 fs-4 fw-semibold border rounded-end-3"
                            href="#"
                          >
                            SERVICES
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-light nav-items my-2 text-center py-2 fs-4 fw-semibold rounded-end-3 border"
                            aria-disabled="true"
                          >
                            RENT
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  class="col-sm-10 p-xxl-5 g-0"
                  style={{ backgroundColor: "rgb(234,245,252)" }}
                >
                  <div class="card rounded-0 bg-transparent border border-0">
                    <div class="container">
                      <div class="row align-items-start">
                        <div class="col">
                          <div class="card rounded-4 border border-dark">
                            <div class="card-body py-1">
                              <div class="row">
                                <div class="col-sm-6 mb-3 mb-sm-0 g-0 ">
                                  <div class="card border-0">
                                    <div class="">
                                      <span class="card-title mx-2 ">
                                        <img
                                          src="images/Subtract.svg"
                                          className="py-2"
                                          alt=""
                                        />
                                      </span>
                                      <span class="border-end">.</span>

                                      <span class="dropdown">
                                        <button
                                          class="btn dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton1"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          Property Type
                                          <i
                                            class="fa-solid fa-circle-chevron-down mx-2"
                                            style={{ color: " rgb(33,48,113)" }}
                                          ></i>
                                        </button>
                                        <ul
                                          class="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton1"
                                        >
                                          <li>
                                            <a class="dropdown-item" href="/#">
                                              Action
                                            </a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="/#">
                                              Another action
                                            </a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="/#">
                                              Something else here
                                            </a>
                                          </li>
                                        </ul>
                                      </span>
                                      <span>
                                        <input
                                          placeholder="Search For A Property"
                                          className="serachbarInput"
                                          type="text"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0 g-0">
                                  <div class="card border-0">
                                    <div class="ms-xxl-auto py-1 mx-3">
                                      <button
                                        type="button"
                                        class="btn btn-sm text-light rounded-3"
                                        style={{
                                          backgroundColor: "rgb(33,48,113)",
                                        }}
                                      >
                                        <i class="bi bi-search"></i>Find
                                        Property
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row row-cols-1 row-cols-md-3 g-2 mb-3">
                        <div class="col">
                          <div class="card border border-0 h-100 rounded-4">
                            <div class="card-body  background-1 rounded-4">
                              <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                  {" "}
                                  <h5 class=" fw-bolder">Plots</h5>
                                </div>
                                <div class="">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn"
                                    style={{
                                      fontSize: "35px",
                                      marginRight: "-10px",
                                      marginTop: "-17px",
                                    }}
                                  >
                                    <i
                                      class="bi bi-arrow-right-circle-fill"
                                      style={{ color: "rgb(1,203,48)" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card border border-0 h-100 rounded-4">
                            <div class="card-body  background-2 rounded-4">
                              <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                  {" "}
                                  <h5 class=" fw-bolder">Flats</h5>
                                </div>
                                <div class="">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn"
                                    style={{
                                      fontSize: "35px",
                                      marginRight: "-10px",
                                      marginTop: "-17px",
                                    }}
                                  >
                                    <i
                                      class="bi bi-arrow-right-circle-fill"
                                      style={{ color: "rgb(1,203,48)" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card border border-0 h-100 rounded-4">
                            <div class="card-body  background-3 rounded-4">
                              <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                  {" "}
                                  <h5 class=" fw-bolder">Duplex</h5>
                                </div>
                                <div class="">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn"
                                    style={{
                                      fontSize: "35px",
                                      marginRight: "-10px",
                                      marginTop: "-17px",
                                    }}
                                  >
                                    <i
                                      class="bi bi-arrow-right-circle-fill"
                                      style={{ color: "rgb(1,203,48)" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row row-cols-1 row-cols-md-3 g-2">
                        <div class="col">
                          <div class="card border border-0 h-100 rounded-4">
                            <div class="card-body  background-4 rounded-4">
                              <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                  {" "}
                                  <h5 class=" fw-bolder">Commercial</h5>
                                </div>
                                <div class="">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn"
                                    style={{
                                      fontSize: "35px",
                                      marginRight: "-10px",
                                      marginTop: "-17px",
                                    }}
                                  >
                                    <i
                                      class="bi bi-arrow-right-circle-fill"
                                      style={{ color: "rgb(1,203,48)" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card border border-0 h-100 rounded-4">
                            <div class="card-body  background-5 rounded-4">
                              <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                  {" "}
                                  <h5 class="fw-bolder">Land</h5>
                                </div>
                                <div class="">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn"
                                    style={{
                                      fontSize: "35px",
                                      marginRight: "-10px",
                                      marginTop: "-17px",
                                    }}
                                  >
                                    <i
                                      class="bi bi-arrow-right-circle-fill"
                                      style={{ color: "rgb(1,203,48)" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card border border-0 h-100 rounded-4">
                            <div class="card-body  background-6 rounded-4">
                              <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                  {" "}
                                  <h5 class=" fw-bolder">Resale Properties</h5>
                                </div>
                                <div class="">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn"
                                    style={{
                                      fontSize: "35px",
                                      marginRight: "-10px",
                                      marginTop: "-17px",
                                    }}
                                  >
                                    <i
                                      class="bi bi-arrow-right-circle-fill"
                                      style={{ color: "rgb(1,203,48)" }}
                                    ></i>
                                  </button>
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
          </div>
        </div>
        <div className="">
          <div
            className="container-fluid"
            style={{ backgroundColor: "rgb(234,245,252)" }}
          >
            <div class="container">
              <div class="row align-items-start">
                <div class="col">
                  <div class="card bg-transparent border border-0">
                    <div class="h1 mt-5 fw-bolder font-size-testimonial">
                      Hot & Trending
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container ">
              <div class="row align-items-start">
                <div class="col">
                  <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <div class="card border border-0 bg-transparent">
                        <div class="card-body ">
                          <p class="card-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Totam error delectus quas voluptate!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="container-fluid"
            style={{ backgroundColor: "rgb(234,245,252)" }}
          >
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0">
                  <div class="card-body">
                    <div className="slider-container">
                      <Slider {...settings3}>
                        <div className="">
                          <div
                            class="card mx-1 border-2 border-white bg-black background-12"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 text-light">
                                      1211 Sq.Ft. Residential Land/plot for Sale
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        Gulmohar Colony, Bhopal
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-13"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      850 Sq.Ft. 3 BHK Residential Apartment
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        Gulmohar Colony,Bhopal
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-14"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      1000 Sq.Ft. 2 BHK Residential Duplex for
                                      Sale
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        Gulmohar Colony,Bhopal
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-15"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      2141 Sq.Ft. 4 BHK Residential Apartment
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        Gulmohar Colony,Bhopal
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-16"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      3200 Sq.Ft. Residential Land/Plot for Sale
                                      in
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        Gulmohar Colony,Bhopal
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
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
        <div className="">
          <div
            className="container-fluid"
            style={{ backgroundColor: "rgb(234,245,252)" }}
          >
            <div class="container">
              <div class="row align-items-start">
                <div class="col">
                  <div class="card bg-transparent border border-0">
                    <div class="h1 mt-5 fw-bolder font-size-testimonial">
                      Builder Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container ">
              <div class="row align-items-start">
                <div class="col">
                  <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <div class="card border border-0 bg-transparent">
                        <div class="card-body ">
                          <p class="card-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Totam error delectus quas voluptate!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card text-end border border-0 bg-transparent">
                        <div class="card-body">
                          <a
                            href="#"
                            class="btn text-light"
                            style={{ backgroundColor: "rgb(1,203,48)" }}
                          >
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="container-fluid"
            style={{ backgroundColor: "rgb(234,245,252)" }}
          >
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0">
                  <div class="card-body">
                    <div className="slider-container">
                      <Slider {...settings1}>
                        <div className="">
                          <div
                            class="card mx-1 border-2 border-white bg-black background-7"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      Hunting villa
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        California,Seaside
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                              <h5 class="card-title mt-auto">
                                {" "}
                                <i
                                  class="bi bi-arrow-right-circle-fill"
                                  style={{
                                    color: "rgb(1,203,48)",
                                    fontSize: "35px",
                                  }}
                                ></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-8"
                            style={{ width: "18rem;" }}
                          >
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      Hunting villa
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        California,Seaside
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                              <h5 class="card-title mt-auto">
                                {" "}
                                <i
                                  class="bi bi-arrow-right-circle-fill"
                                  style={{
                                    color: "rgb(1,203,48)",
                                    fontSize: "35px",
                                  }}
                                ></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-9"
                            style={{ width: "18rem;" }}
                          >
                            {" "}
                            <div class="d-grid gap-2 col-8 mt-2 mx-2">
                              <button
                                class="btn btn-light rounded-pill py-2 fw-bold"
                                type="button"
                              >
                                Rs 24 Lac-Rs 26 lac
                              </button>
                              <button
                                class="btn btn-light rounded-pill py-2"
                                type="button"
                              >
                                <i
                                  class="bi bi-grid-fill"
                                  style={{ color: "rgb(0,97,184)" }}
                                ></i>
                                <span className="fw-semibold">
                                  &nbsp;2400 Square Feet
                                </span>
                              </button>
                            </div>
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      Hunting villa
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        California,Seaside
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                              <h5 class="card-title mt-auto">
                                {" "}
                                <i
                                  class="bi bi-arrow-right-circle-fill"
                                  style={{
                                    color: "rgb(1,203,48)",
                                    fontSize: "35px",
                                  }}
                                ></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="card mx-1 border-2 border-white bg-black background-10"
                            style={{ width: "18rem;" }}
                          >
                            {" "}
                            <div class="card-body d-flex flex-row justify-content-between">
                              <h5 class="card-title mt-auto">
                                <div class="card bg-transparent border border-0">
                                  <div class=" ">
                                    <h6 class="card-subtitle mb-1 fw-bold text-light">
                                      Hunting villa
                                    </h6>
                                    <h6
                                      class="card-subtitle text-body-secondary"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <i class="bi bi-geo-alt-fill text-light"></i>
                                      <span className="mx-1 text-light">
                                        California,Seaside
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </h5>
                              <h5 class="card-title mt-auto">
                                {" "}
                                <i
                                  class="bi bi-arrow-right-circle-fill"
                                  style={{
                                    color: "rgb(1,203,48)",
                                    fontSize: "35px",
                                  }}
                                ></i>
                              </h5>
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

        <div style={{ backgroundColor: " rgb(234,242,253)" }}>
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0">
                  <div class="h1 mt-5 fw-bolder font-size-testimonial">
                    Re Sale Properties
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container ">
            <div class="row align-items-start">
              <div class="col">
                <div class="row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card border border-0 bg-transparent">
                      <div class="card-body ">
                        <p class="card-text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Totam error delectus quas voluptate!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card text-end border border-0 bg-transparent">
                      <div class="card-body">
                        <a
                          href="#"
                          class="btn text-light"
                          style={{ backgroundColor: "rgb(1,203,48)" }}
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0 mb-5">
                  <div class="card-body">
                    <div className="slider-container">
                      <Slider {...settings4}>
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
                              <h5 class="card-title">Seaside Serenity Villa</h5>
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
                                    <span className="mx-1">4-Bedroom</span>
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
                          <div class="card mx-2">
                            <img
                              src="city-square.jpg"
                              style={{ height: "250px" }}
                              class="card-img-top"
                              alt="..."
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
                              <h5 class="card-title">Seaside Serenity Villa</h5>
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
                                    <span className="mx-1">4-Bedroom</span>
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
                              <h5 class="card-title">Seaside Serenity Villa</h5>
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
                                    <span className="mx-1">4-Bedroom</span>
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
                          <div class="card mx-2">
                            <img
                              src="city-square.jpg"
                              style={{ height: "250px" }}
                              class="card-img-top"
                              alt="..."
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
                              <h5 class="card-title">Seaside Serenity Villa</h5>
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
                                    <span className="mx-1">4-Bedroom</span>
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

        <div
          class="container-fluid text-center"
          style={{ backgroundColor: "rgb(246,250,254)" }}
        >
          <div class="row align-items-start">
            <div class="col p-xxl-5">
              <div class="card col-sm-6 mx-auto border border-0 bg-transparent">
                <div class="card-body">
                  <h1 class="card-header bg-transparent border-0 font-size">
                    Post Your Property
                  </h1>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias doloribus voluptatum ad maxime.
                  </p>
                </div>
              </div>
              <div class="container text-center mt-5">
                <div class="row align-items-start ">
                  <div class="col-sm-4 mx-auto">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                      <div class="col">
                        <div class="card h-100 text-start rounded-3">
                          <div class="">
                            <img
                              src="flat.png"
                              class="card-img-top rounded-3"
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div
                          class="card h-100 text-start rounded-3"
                          style={{ borderColor: "rgb(1,90,176)" }}
                        >
                          <div class="">
                            <img
                              src="duplex-1.png"
                              class="card-img-top rounded-3 "
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div
                          class="card h-100 text-start rounded-3"
                          style={{ borderColor: "rgb(1,90,176)" }}
                        >
                          <div class="">
                            <img
                              src="plot-1.png"
                              class="card-img-top rounded-3 "
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn mt-5 text-light"
                      style={{ backgroundColor: "rgb(0,203,49)" }}
                    >
                      Post Your Property
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid text-center background-11">
          <div class="row align-items-start">
            <div class="col-sm-6 mx-auto">
              <div class="card mt-5 bg-transparent text-light border-0">
                <div class="card-body">
                  <h3 class="card-title fw-bold ">
                    Still not found what you are looking for connect with us.
                  </h3>
                  <p class="card-text fs-5 col-sm-10 mx-auto">
                    Spend vacations in best hotels and resorts find the great
                    place of your choice using different searching options.
                  </p>
                  <button type="button" class="btn border-light text-light">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: " rgb(234,242,253)" }}>
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0">
                  <div class="h1 mt-5 fw-bolder font-size-testimonial ">
                    Testimonials from
                  </div>
                  <div class="h1 fw-bolder fst-italic font-size-testimonial">
                    Customers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="row align-items-start">
              <div class="col">
                <div class="row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card border border-0 bg-transparent">
                      <div class="card-body ">
                        <p class="card-text">
                          Group One is excited to present this exeptional
                          property in the prestegious location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid pb-5">
              <div class="row align-items-start">
                <div class="col">
                  <div class="card bg-transparent border border-0">
                    <div class="card-body">
                      <div className="slider-container ">
                        <Slider {...settings2}>
                          <div className="">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                            color: "rgb(0,96,185)",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card mx-2">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card mx-2">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
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
        <div
          class="container-fluid text-center "
          style={{ backgroundColor: "rgb(0,96,185)" }}
        >
          <div class="row align-items-start">
            <div class="col">
              <div class="d-flex flex-row justify-content-center py-3">
                <div class="p-2">
                  <a href="#" class="text-light">
                    <i
                      class="fa-brands fa-facebook"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </a>
                </div>
                <div class="p-2">
                  <a href="#" class="text-light">
                    <i
                      class="fa-brands fa-instagram"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </a>
                </div>
                <div class="p-2">
                  <a href="#" class="text-light">
                    <i
                      class="fa-brands fa-linkedin"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </a>
                </div>
                <div class="p-2">
                  <a href="#" class="text-light">
                    <i
                      class="fa-brands fa-twitter"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
