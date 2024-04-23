import React from "react";
import { Link, NavLink } from "react-router-dom";

const Filter = () => {
  const activelink =
    "text-decoration-none custom-bg-green p-2 text-light rounded-2";
  const normalLink = "text-decoration-none px-3";
  return (
    <div>
      <div
        class="container-fluid text-center questrial-regular mt-2"
        style={{ backgroundColor: "rgb(246,247,246)" }}
      >
        <div class="row align-items-start">
          <div class="col">
            <div class="card border-0 rounded-4 pb-5 background-17">
              <div class="card-body">
                <div class="col-sm-9 mx-auto">
                  <nav class="navbar navbar-expand-lg py-2 bg-light rounded-3">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#">
                        <img
                          src="logo.png"
                          class="img-fluid"
                          alt="..."
                          style={{ width: "100px" }}
                        />
                      </a>
                      <button
                        class="navbar-toggler "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        class="collapse navbar-collapse "
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                          <li class="nav-item">
                            <NavLink
                              class="nav-link"
                              aria-current="page"
                              to="/"
                              className={({ isActive }) =>
                                isActive ? activelink : normalLink
                              }
                              style={{ color: " rgb(34,35,35)" }}
                            >
                              Home
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              class="nav-link"
                              to="/about"
                              className={({ isActive }) =>
                                isActive ? activelink : normalLink
                              }
                              style={{ color: " rgb(34,35,35)" }}
                            >
                              About Us
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              class="nav-link"
                              to="/services01"
                              className={({ isActive }) =>
                                isActive ? activelink : normalLink
                              }
                              style={{ color: " rgb(34,35,35)" }}
                            >
                              Services{" "}
                              <i
                                class="bi bi-chevron-down"
                                style={{ fontSize: "12px" }}
                              ></i>
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              class="nav-link"
                              to="/career"
                              className={({ isActive }) =>
                                isActive ? activelink : normalLink
                              }
                              style={{ color: " rgb(34,35,35)" }}
                            >
                              Career
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              class="nav-link"
                              to="/contact"
                              className={({ isActive }) =>
                                isActive ? activelink : normalLink
                              }
                              style={{ color: " rgb(34,35,35)" }}
                            >
                              Contact Us
                            </NavLink>
                          </li>
                        </ul>
                        <form
                          class="d-flex flex-column flex-md-row"
                          role="search"
                        >
                          <Link to="login">
                            <button
                              class="btn border border-black rounded-3 mx-1 btn-sm py-2 mb-1 mb-md-0"
                              type="submit"
                            >
                              <i class="fa-sharp fa-solid fa-location-crosshairs mx-1"></i>
                              Indore
                            </button>
                          </Link>

                          <Link to="plot01">
                            <button
                              class="btn btn-sm rounded-3 text-light mx-1 mb-1 mb-md-0 py-2"
                              type="submit"
                              style={{ backgroundColor: "rgb(1,97,184)" }}
                            >
                              Post Your Property
                            </button>
                          </Link>

                          <Link to="login">
                            <button
                              class="btn rounded-3 px-4 py-2 border border-0 text-light"
                              style={{ backgroundColor: "rgb(0,202,48)" }}
                              type="submit"
                            >
                              Login <i class="bi bi-chevron-down"></i>
                            </button>
                          </Link>
                        </form>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="" style={{ marginTop: "10%" }}>
                  <h5 class="card-title font-size-interior fw-bold text-light text-start mx-5">
                    Find the <i>Right</i> home <br />
                    and start packing
                  </h5>
                  <p class="card-text col-sm-4 mx-5 text-start text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero repellat harum a? Unde?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid text-center pt-5"
        style={{ backgroundColor: "rgb(246,247,246)" }}
      >
        <div class="row align-items-start">
          <div class="col">
            <div class="card bg-transparent border-0">
              <div class="card-body">
                <h5 class="card-title font-size-testimonial fw-bold">
                  Search <i>By</i> Filter
                </h5>
                <p class="card-text col-sm-4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi non quos quam dolorum?
                </p>
                <div className="col-sm-4 mx-auto">
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text rounded-start-pill border-0"
                      style={{ backgroundColor: "rgb(255,255,255)" }}
                    >
                      <i class="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Search Homes"
                      class="form-control border-0"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span
                      class="input-group-text rounded-end-pill border-0"
                      style={{ backgroundColor: "rgb(255,255,255)" }}
                    >
                      <button
                        type="button"
                        class="btn btn-primary rounded-pill border-0"
                        style={{ backgroundColor: "rgb(0,202,48)" }}
                      >
                        Submit
                      </button>
                    </span>
                  </div>
                </div>

                <div class="container mt-4">
                  <div class="row align-items-start">
                    <div class="col-sm-6 mx-auto">
                      <div class="card bg-transparent border-0">
                        <div class="card-body">
                          <form class="row row-cols-lg-auto g-4 align-items-center">
                            <div class="col-12">
                              <select
                                class="form-select fw-semibold"
                                id="inlineFormSelectPref"
                                style={{
                                  width: "120px",
                                  height: "40px",
                                  textAlign: "center",
                                }}
                              >
                                <option selected>Location</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>

                            <div class="col-12">
                              <select
                                class="form-select fw-semibold"
                                id="inlineFormSelectPref"
                                style={{
                                  width: "120px",
                                  height: "40px",
                                  textAlign: "center",
                                }}
                              >
                                <option selected>Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div class="col-12">
                              <select
                                class="form-select fw-semibold"
                                id="inlineFormSelectPref"
                                style={{
                                  width: "120px",
                                  height: "40px",
                                  textAlign: "center",
                                }}
                              >
                                <option selected>Rooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div class="col-12">
                              <select
                                class="form-select fw-semibold"
                                id="inlineFormSelectPref"
                                style={{
                                  width: "120px",
                                  height: "40px",
                                  textAlign: "center",
                                }}
                              >
                                <option selected>Status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col-sm-10 mx-auto text-start">
                      {" "}
                      <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
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
                        <div class="col-sm-6 ">
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
                      </div>
                      <div class="row">
                        <div class="col-sm-6 my-3 mb-sm-0">
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
                        <div class="col-sm-6 my-3">
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
                      </div>
                      <div class="row">
                        <div class="col-sm-6 my-3 mb-sm-0">
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
                        <div class="col-sm-6 my-3">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid questrial-regular">
        <div
          class="card rounded-0"
          style={{ backgroundColor: "rgb(45,44,44)" }}
        >
          <div class="card-body">
            <div class="container">
              <div class="row align-items-start">
                <div class="col">
                  <div class="row">
                    <div class="col-sm-3 mb-3 mb-sm-0">
                      <div class="card bg-transparent text-light border-0">
                        <div class="card-body pt-5">
                          <p class="card-text text-start">
                            2728 Hickory StreetSalt Lake City,UT 84104
                          </p>
                          <p class="card-text text-start">
                            <i class="fa-solid fa-phone-flip"></i> +1
                            206-214-2298
                          </p>
                          <p class="card-text text-start">
                            <i class="fa-regular fa-envelope"></i>{" "}
                            support@rezilla.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="card bg-transparent text-light border-0">
                        <div class="card-body">
                          <h5 class="mx-4 pb-2">Quick Links</h5>
                          <ul class=" list-group-flush">
                            <li class="list-group-item border-0">
                              <a
                                href=""
                                className="text-decoration-none text-light"
                              >
                                Home
                              </a>
                            </li>
                            <li class="list-group-item border-0">
                              {" "}
                              <a
                                href=""
                                className="text-decoration-none text-light"
                              >
                                About
                              </a>
                            </li>
                            <li class="list-group-item border-0">
                              {" "}
                              <a
                                href="filter"
                                className="text-decoration-none text-light"
                              >
                                Property
                              </a>
                            </li>
                            <li class="list-group-item border-0">
                              {" "}
                              <a
                                href="internal1"
                                className="text-decoration-none text-light"
                              >
                                Services
                              </a>
                            </li>
                            <li class="list-group-item border-0">
                              {" "}
                              <a
                                href=""
                                className="text-decoration-none text-light"
                              >
                                Blogs
                              </a>
                            </li>
                            <li class="list-group-item border-0">
                              {" "}
                              <a
                                href=""
                                className="text-decoration-none text-light"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="card bg-transparent text-light border-0">
                        <div class="card-body">
                          <h5 class="mx-4 pb-2">Service</h5>
                          <ul class=" list-group-flush">
                            <li class="list-group-item border-0">Office</li>
                            <li class="list-group-item border-0">
                              Residential Apartment
                            </li>
                            <li class="list-group-item border-0">Land</li>
                            <li class="list-group-item border-0">Commercial</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="card bg-transparent text-light border-0">
                        <div class="card-body">
                          <h5 class="mx-4">Follow Us on</h5>
                          <div class="d-flex flex-row mx-3">
                            <div class="p-2">
                              <i class="bi bi-facebook"></i>
                            </div>
                            <div class="p-2">
                              <i class="bi bi-instagram"></i>
                            </div>
                            <div class="p-2">
                              <i class="bi bi-linkedin"></i>
                            </div>
                            <div class="p-2">
                              <i class="bi bi-twitter"></i>
                            </div>
                            <div class="p-2">
                              <i class="bi bi-youtube"></i>
                            </div>
                          </div>
                          <h5 class="mx-4 py-1">About</h5>
                          <p class="card-text mx-4">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
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

        <div class="card rounded-0" style={{ backgroundColor: "rgb(10,9,11)" }}>
          <div class="">
            <div class="container-fluid">
              <div class="row align-items-start">
                <div class="col">
                  <div class="row">
                    <div class="card bg-transparent">
                      <div class=" mx-xxl-5 py-1">
                        <div class="row">
                          <div class="col-sm-3 mb-sm-0">
                            <div class="card bg-transparent text-light border-0">
                              <div class="">
                                <h6 class="card-title">
                                  &copy; Rezilla- All rights reserved
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-9">
                            <div class="card bg-transparent text-light border-0">
                              <div class="shrink">
                                <div class="d-flex flex-row justify-content-end">
                                  <div class="px-5">
                                    {" "}
                                    <h6 class="card-title">
                                      Terms and Conditions
                                    </h6>
                                  </div>
                                  <div class="">
                                    {" "}
                                    <h6 class="card-title">Privacy Policy</h6>
                                  </div>
                                  <div class="px-5">
                                    {" "}
                                    <h6 class="card-title">Disclaimer</h6>
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
        </div>
      </div>
    </div>
  );
};

export default Filter;
