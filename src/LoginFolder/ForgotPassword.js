const ForgotPassword = () => {
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

      <div class="container mt-1 mb-3">
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <div class="card rounded-4 border-0" style={{ height: "500px" }}>
              <img
                src="newpassword.png"
                class="card-img-top rounded-4"
                alt="..."
                style={{ height: "500px" }}
              />
            </div>
          </div>

          <div class="col-sm-5 mx-5">
            <div class="card border border-0">
              <div class="card-body">
                <p className="mt-5">
                  <a href="#" class=" text-decoration-none text-dark">
                    &lt; Back to login
                  </a>
                </p>

                <h2 class="card-title  mb-3 fw-bolder">
                  Forgot your password?
                </h2>

                <h6
                  class="card-subtitle mb-5 text-muted"
                  style={{ fontSize: "13px" }}
                >
                  Don't worry, happens to all of us. Enter your email below to
                  recover your password
                </h6>

                <div class="mb-3 form-group">
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
                <a href="verifycode">
                  <button
                    type="button"
                    class="btn w-100 mb-2 mt-3 p-2 text-light"
                    style={{ backgroundColor: "rgb(0,202,48)" }}
                  >
                    Submit
                  </button>
                </a>

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
    </>
  );
};
export default ForgotPassword;
