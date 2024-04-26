const Login = () => {
  return (
    <>
      <div>
        <div class="container mt-5">
          <div class="row">
            <div
              class="col d-flex justify-content-end"
              style={{ marginRight: "8%" }}
            >
              <img
                src="logo.png"
                class="img-fluid"
                alt="..."
                style={{ width: "15%" }}
              />
            </div>
          </div>
        </div>

        <div class="container mt-1 mb-3">
          <div class="row justify-content-center">
            <div class="col-sm-5">
              <div class="card rounded-4 border-0" style={{ height: "600px" }}>
                <img
                  src="login.png"
                  class="card-img-top rounded-4"
                  alt="..."
                  style={{ height: "600px" }}
                />
              </div>
            </div>

            <div class="col-sm-5 mx-5">
              <div class="card border border-0">
                <div class="card-body">
                  <h2 class="card-title mt-5 mb-3 fw-bolder">Login</h2>
                  <h6
                    class="card-subtitle mb-5 text-muted"
                    style={{ fontSize: "13px" }}
                  >
                    Login to access your beyond BHK Account
                  </h6>

                  <div class="mb-4 form-group">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control border-secondary"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="input-group mb-3 position-relative">
                    <label
                      class="position-absolute top-0 translate-middle-y z-index-1 left-0 "
                      id="basic-addon1"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      class="form-control border border-secondary rounded-start border-end-0"
                      placeholder="Enter password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span
                      class="input-group-text bg-transparent border-secondary"
                      id="basic-addon2"
                    >
                      <button type="button" class="btn border border-0 p-1">
                        <i class="bi bi-eye-slash-fill "></i>
                      </button>
                    </span>
                  </div>

                  <div class="d-flex flex-row justify-content-between">
                    <div class="">
                      {" "}
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input border border-dark"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label class="form-check-label" for="gridCheck">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <p>
                        <a
                          href="#"
                          class="text-decoration-none"
                          style={{ color: " rgb(255,154,153)" }}
                        >
                          Forgot Password
                        </a>
                      </p>
                    </div>
                  </div>
                  <a href="forgotpassword">
                    <button
                      type="button"
                      class="btn w-100 mb-2 mt-3 p-2 text-light"
                      style={{ backgroundColor: "rgb(0,202,48)" }}
                    >
                      Login
                    </button>
                  </a>

                  <p class="card-text text-center ">
                    Don't have an account?{" "}
                    <a
                      href="signup"
                      class="text-decoration-none"
                      style={{ color: "rgb(0,202,48)" }}
                    >
                      Sign up
                    </a>
                  </p>

                  <div class="container text-center mt-4">
                    <div class="row align-items-start">
                      <div class="col">
                        <hr />
                      </div>
                      <div class="col text-secondary mt-1 responsive-1">
                        Or login with
                      </div>
                      <div class="col">
                        <hr />
                      </div>
                    </div>
                  </div>

                  <div class="container-fluid">
                    <div class="row align-items-start">
                      <div class="col">
                        <div class="d-flex flex-row responsive">
                          <div class="p-2">
                            {" "}
                            <button
                              type="button"
                              class="btn rounded-1"
                              style={{
                                width: "120px",
                                height: "40px",
                                borderColor: "rgb(81,92,238)",
                              }}
                            >
                              <i class="bi bi-facebook p-1 text-primary"></i>{" "}
                              <span className="" style={{ fontSize: "15px" }}>
                                Facebook
                              </span>
                            </button>
                          </div>
                          <div class="p-2">
                            {" "}
                            <button
                              type="button"
                              class="btn rounded-1"
                              style={{
                                width: "120px",
                                height: "40px",
                                borderColor: "rgb(81,92,238)",
                              }}
                            >
                              <img
                                src="Google-Logo.webp"
                                alt=""
                                className="img-fluid"
                                style={{ width: "25px" }}
                              />{" "}
                              <span className="">Google</span>
                            </button>
                          </div>
                          <div class="p-2">
                            {" "}
                            <button
                              type="button"
                              class="btn rounded-1"
                              style={{
                                width: "120px",
                                height: "40px",
                                borderColor: "rgb(81,92,238)",
                              }}
                            >
                              <i class="fa-brands fa-apple fs-5 p-1"></i>{" "}
                              <span className="">Apple</span>
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
    </>
  );
};
export default Login;
