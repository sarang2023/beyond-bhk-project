import React from "react";
import { Link, NavLink } from "react-router-dom";

const Career = () => {
  const activelink =
    "text-decoration-none custom-bg-green p-2 text-light rounded-2";
  const normalLink = "text-decoration-none px-3";
  return (
    <>
      <div class="container-fluid text-center questrial-regular mt-2">
        <div class="row align-items-start">
          <div class="col">
            <div
              class="card border-0 rounded-4 pb-5"
              style={{ backgroundColor: "rgb(0,96,185)" }}
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
                          <Link to="login">
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
                    Career With <i> Beyond</i> BHK
                  </h5>
                  <p class="card-text col-sm-4 mx-auto text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero repellat harum a? Unde?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5 mb-2 questrial-regular">
        <div class="row align-items-start">
          <div class="col">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card border-0">
                  <div class="card-body">
                    <h5 class="card-title font-size-interior fw-bold text-start">
                      The Career you always Imagined
                    </h5>
                    <p class="card-text text-start fs-5 lh-1">
                      The Image Property team's purpose is to create
                      opportunities for everyone to have a home; our mission is
                      to become the real estate agency of choice. This is our
                      chance to join a community of industry
                      professionals,renowned for their passion, service and
                      results. Are you ready to evolve your career with Image?
                    </p>
                    <p class="card-text text-start fs-5 lh-1">
                      Today's market is rapidly evolving. We understood that our
                      team needs to consistently perform while maintaining the
                      flexibility to adapt and adjust to the needs of their
                      clients in today's fast paced environment. We have
                      invested heavily to provide the tools you need to deliver
                      world class service at the touch of a button.
                    </p>
                    <p class="card-text text-start fs-5 lh-1">
                      We have designed our business to be a home in which
                      property professionals can thrive. Here you are encouraged
                      to do what you love with all the support that you need,
                      always with a dash of fun along the way.
                    </p>
                    <p class="card-text text-start fs-5">
                      Make your future,now. Imagine what life could be like with
                      Image.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card rounded-4" style={{ height: "565px" }}>
                  <img
                    src="career-1.jpg"
                    class="card-img-top rounded-4 h-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5 questrial-regular">
        <div class="row align-items-start">
          <div class="col">
            <div class="card border-0">
              <div class="card-body">
                <h5 class="card-title font-size-interior fw-semibold col-sm-6 mx-auto">
                  Current Available Opportunities
                </h5>
                <p class="card-text col-sm-4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero repellat harum a? Unde?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-3 questrial-regular">
        <div class="row align-items-start">
          <div class="col-sm-10 mx-auto">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100 border border-dark shadow-sm  bg-body-light">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      Experienced property manager
                    </h5>
                    <h6 class="card-text">Salary 25000-30000</h6>

                    <div class="card mt-5 border-0">
                      <div class="card-body d-flex justify-content-between">
                        <span>Head Office </span>
                        <button
                          type="button"
                          class="btn text-light"
                          style={{ backgroundColor: "rgb(0,202,48)" }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      Property management Assistant
                    </h5>
                    <h6 class="card-text">Salary 25000-30000</h6>

                    <div class="card mt-5 border-0">
                      <div class="card-body d-flex justify-content-between">
                        <span>Head Office </span>
                        <button
                          type="button"
                          class="btn text-light"
                          style={{ backgroundColor: "rgb(0,202,48)" }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      Talent Acquisition leader
                    </h5>
                    <h6 class="card-text">Salary 25000-30000</h6>

                    <div class="card mt-5 border-0">
                      <div class="card-body d-flex justify-content-between">
                        <span>Head Office </span>
                        <button
                          type="button"
                          class="btn text-light"
                          style={{ backgroundColor: "rgb(0,202,48)" }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Sunshine Coast</h5>
                  <h6 class="card-text">Salary 25000-30000</h6>

                  <div class="card mt-5 border-0">
                    <div class="card-body d-flex justify-content-between">
                      <span>Head Office </span>
                      <button
                        type="button"
                        class="btn text-light"
                        style={{ backgroundColor: "rgb(0,202,48)" }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Sunshine Coast</h5>
                  <h6 class="card-text">Salary 25000-30000</h6>

                  <div class="card mt-5 border-0">
                    <div class="card-body d-flex justify-content-between">
                      <span>Head Office </span>
                      <button
                        type="button"
                        class="btn text-light"
                        style={{ backgroundColor: "rgb(0,202,48)" }}
                      >
                        Apply Now
                      </button>
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
                                href="profile"
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
    </>
  );
};

export default Career;
