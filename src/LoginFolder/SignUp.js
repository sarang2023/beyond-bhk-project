const SignUp = () => {
  return (
    <>
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

      <div class="container mt-1">
        <div class="row justify-content-center">
          <div class="col-sm-4">
            <div class="card rounded-4 border-0" style={{ height: "600px" }}>
              <img
                src="home.avif"
                class="card-img-top rounded-4"
                alt="..."
                style={{ height: "600px" }}
              />
            </div>
          </div>

          <div class="col-sm-6 mx-5">
            <div class="card border border-0">
              <div class="card-body">
                <h2 class="card-title mt-5 mb-3 fw-bolder">Sign up</h2>
                <h6
                  class="card-subtitle mb-3 text-muted"
                  style={{ fontSize: "13px" }}
                >
                  Let's get you all setup so you can access your personal
                  account.
                </h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div class="mb-2 form-group">
                      <label for="exampleFormControlInput1" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control border-secondary"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="mb-2 form-group">
                      <label for="exampleFormControlInput1" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control border-secondary"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
                    <div class="mb-4 form-group">
                      <label for="exampleFormControlInput1" class="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        class="form-control border-secondary"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div class="input-group mb-4 position-relative">
                  <label
                    class="position-absolute top-0 translate-middle-y z-index-1 left-0 "
                    id="basic-addon1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
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
                <div class="input-group mb-3 position-relative">
                  <label
                    class="position-absolute top-0 translate-middle-y z-index-1 left-0 "
                    id="basic-addon1"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control border border-secondary rounded-start border-end-0"
                    placeholder="Confirm password"
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
                          I agree to all the{" "}
                          <span>
                            <a
                              href="#"
                              class="text-decoration-none"
                              style={{ color: " rgb(0,202,48)" }}
                            >
                              Terms&nbsp;
                            </a>
                          </span>
                          and{" "}
                          <span>
                            <a
                              href="#"
                              class="text-decoration-none"
                              style={{ color: " rgb(0,202,48)" }}
                            >
                              Privacy Policies
                            </a>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn w-100 mb-2 mt-3 p-2 text-light"
                  style={{ backgroundColor: "rgb(0,202,48)" }}
                >
                  Create account
                </button>

                <p class="card-text text-center ">
                  Already have an account?{" "}
                  <a
                    href="login"
                    class="text-decoration-none"
                    style={{ color: "rgb(0,202,48)" }}
                  >
                    Login
                  </a>
                </p>

                <div class="container text-center mt-3">
                  <div class="row align-items-start">
                    <div class="col">
                      <hr />
                    </div>
                    <div class="col text-secondary mt-1 responsive-1">
                      Or Sign up with
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
                              width: "140px",
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
                              width: "140px",
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
                              width: "140px",
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
    </>
  );
};
export default SignUp;
