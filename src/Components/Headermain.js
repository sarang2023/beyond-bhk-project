import { Link, NavLink } from "react-router-dom";

const Headermain = () => {
  const activelink =
    "text-decoration-none custom-bg-green p-2 text-light rounded-2";
  const normalLink = "text-decoration-none px-3";

  return (
    <>
      <div>
        <div class="container text-center ">
          <div class="row align-items-start">
            <div class="col-sm-10 mx-auto">
              <nav class="navbar navbar-expand-lg my-2 py-2 shadow-lg p-3 bg-body-light rounded-3">
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
                          to="/home"
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
                          to="about"
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
                          to="services01"
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
                          to="career"
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
                    <form class="d-flex flex-column flex-md-row" role="search">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Headermain;
