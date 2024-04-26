import React from "react";
import { Link, NavLink } from "react-router-dom";

const Contact = () => {
  const activelink =
    "text-decoration-none custom-bg-green p-2 text-light rounded-2";
  const normalLink = "text-decoration-none px-3";
  return (
    <>
      <div className="questrial-regular ">
        <div class="container-fluid text-center mt-2">
          <div class="row align-items-start">
            <div class="col">
              <div
                class="card border-0 rounded-4 pb-5"
                style={{ backgroundColor: "rgb(0,96,185)", height: "370px" }}
              >
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
                            <Link to="">
                              <button
                                class="btn border border-black rounded-3 mx-1 btn-sm py-2 mb-1 mb-md-0"
                                type="submit"
                              >
                                <i class="fa-sharp fa-solid fa-location-crosshairs mx-1"></i>
                                Indore
                              </button>
                            </Link>

                            <Link to="/plot01">
                              <button
                                class="btn btn-sm rounded-3 text-light mx-1 mb-1 mb-md-0 py-2"
                                type="submit"
                                style={{ backgroundColor: "rgb(1,97,184)" }}
                              >
                                Post Your Property
                              </button>
                            </Link>

                            <Link to="/login">
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

                  <div className="mt-5">
                    <h5 class="card-title font-size-interior fw-bold text-light">
                      Get In Touch With <i> Beyond</i> BHK
                    </h5>
                    <p class="card-text col-sm-4 mx-auto text-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero repellat harum a? Unde?
                    </p>
                  </div>
                </div>

                <div class="container mt-3">
                  <div class="row align-items-start">
                    <div class="col-sm-11 mx-auto mb-5">
                      <div class="card px-xxl-3 py-xxl-4 rounded-4">
                        <div class="card-body text-start">
                          <div class="row">
                            <div class="col-sm-4 mb-3 mb-sm-0">
                              <div
                                class="card rounded-4 border-1"
                                style={{
                                  backgroundColor: "rgb(252,252,252)",
                                  borderColor: " rgb(205,213,214)",
                                }}
                              >
                                <div class="card-body">
                                  <h5 class="card-title mt-4 fw-bold">
                                    Support Email
                                  </h5>
                                  <p class="card-text">Hello@beyondbhk.com</p>
                                  <a
                                    href="#"
                                    class="btn py-xxl-3 rounded-4 text-light"
                                    style={{
                                      width: "97%",
                                      backgroundColor: "rgb(0,202,48)",
                                    }}
                                  >
                                    Email Us
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-3 mb-sm-0">
                              <div
                                class="card rounded-4 border-1"
                                style={{
                                  backgroundColor: "rgb(252,252,252)",
                                  borderColor: " rgb(205,213,214)",
                                }}
                              >
                                <div class="card-body">
                                  <h5 class="card-title mt-4 fw-bold">
                                    Phone Number
                                  </h5>
                                  <p class="card-text">+91 8956231478</p>
                                  <a
                                    href="#"
                                    class="btn py-xxl-3 rounded-4 text-light"
                                    style={{
                                      width: "97%",
                                      backgroundColor: "rgb(0,202,48)",
                                    }}
                                  >
                                    Call Us
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div
                                class="card rounded-4 border-1"
                                style={{
                                  backgroundColor: "rgb(252,252,252)",
                                  borderColor: " rgb(205,213,214)",
                                }}
                              >
                                <div class="card-body">
                                  <h5 class="card-title mt-4 fw-bold">
                                    Address
                                  </h5>
                                  <p class="card-text">
                                    12 Cherry street, NJ 10384
                                  </p>
                                  <a
                                    href="#"
                                    class="btn py-xxl-3 rounded-4 text-light"
                                    style={{
                                      width: "97%",
                                      backgroundColor: "rgb(0,202,48)",
                                    }}
                                  >
                                    Visit Us
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="container mt-5">
                            <div class="row align-items-start ">
                              <div class="col">
                                <div class="row row-cols-1 row-cols-md-2 g-5">
                                  <div class="col">
                                    <div class="card border-0">
                                      <div class="card-body">
                                        <div class="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                          >
                                            Full Name
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control rounded-0"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                        <div class="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                          >
                                            Email
                                          </label>
                                          <input
                                            type="email"
                                            class="form-control rounded-0"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                        <div class="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                          >
                                            Phone Number
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control rounded-0"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                        <div class="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                          >
                                            Message
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control rounded-0"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                        <div class="col-12">
                                          <button
                                            type="submit"
                                            class="btn w-100 py-3 rounded-4 text-light mt-3"
                                            style={{
                                              backgroundColor: "rgb(0,202,48)",
                                            }}
                                          >
                                            Send Form
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="card border-0">
                                      <div class="card-body">
                                        <iframe
                                          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58898.93022060096!2d75.86255525863893!3d22.6842253653779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713524051229!5m2!1sen!2sin"
                                          width="100%"
                                          height="450"
                                          style={{
                                            border: 0,

                                            loading: "lazy",
                                            referrerpolicy:
                                              "no-referrer-when-downgrade",
                                          }}
                                        ></iframe>
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
                                          href="plots1"
                                          className="text-decoration-none text-light"
                                        >
                                          Home
                                        </a>
                                      </li>
                                      <li class="list-group-item border-0">
                                        {" "}
                                        <a
                                          href="flats"
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
                                          href="profile"
                                          className="text-decoration-none text-light"
                                        >
                                          Blogs
                                        </a>
                                      </li>
                                      <li class="list-group-item border-0">
                                        {" "}
                                        <a
                                          href="frame39"
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
                                      <li class="list-group-item border-0">
                                        <a
                                          href="frame45"
                                          className="text-decoration-none text-light"
                                        >
                                          Office
                                        </a>{" "}
                                      </li>
                                      <li class="list-group-item border-0">
                                        {" "}
                                        <a
                                          href="frame46"
                                          className="text-decoration-none text-light"
                                        >
                                          Residential Apartment
                                        </a>
                                      </li>
                                      <li class="list-group-item border-0">
                                        {" "}
                                        <a
                                          href="frame47"
                                          className="text-decoration-none text-light"
                                        >
                                          Land
                                        </a>
                                      </li>
                                      <li class="list-group-item border-0">
                                        <a
                                          href="frame48"
                                          className="text-decoration-none text-light"
                                        >
                                          Commercial
                                        </a>
                                      </li>
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
                                    <h5 class="mx-4 py-1">
                                      {" "}
                                      <a
                                        href="frame38"
                                        className="text-decoration-none text-light"
                                      >
                                        About
                                      </a>
                                    </h5>
                                    <p class="card-text mx-4">
                                      Some quick example text to build on the
                                      card title and make up the bulk of the
                                      card's content.
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

                  <div
                    class="card rounded-0"
                    style={{ backgroundColor: "rgb(10,9,11)" }}
                  >
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
                                              <h6 class="card-title">
                                                Privacy Policy
                                              </h6>
                                            </div>
                                            <div class="px-5">
                                              {" "}
                                              <h6 class="card-title">
                                                Disclaimer
                                              </h6>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
