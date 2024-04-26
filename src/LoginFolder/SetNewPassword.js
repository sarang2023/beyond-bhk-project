const SetNewPassword = () => {
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
                  <h2 class="card-title  mb-3 mt-5 fw-bolder">
                    Set a password
                  </h2>

                  <h6
                    class="card-subtitle mb-4 text-muted"
                    style={{ fontSize: "13px" }}
                  >
                    Your previous password has been resetted. Please set a new
                    password for your account.
                  </h6>

                  <div class="input-group mb-3 position-relative">
                    <label
                      class="position-absolute top-0 translate-middle-y z-index-1 left-0 "
                      id="basic-addon1"
                    >
                      Create Password
                    </label>
                    <input
                      type="text"
                      class="form-control border border-secondary rounded-start border-end-0"
                      placeholder="Enter code"
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
                      Re-enter Password
                    </label>
                    <input
                      type="text"
                      class="form-control border border-secondary rounded-start border-end-0"
                      placeholder="Enter code"
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

                  <a href="home">
                    <button
                      type="button"
                      class="btn w-100 mb-2 mt-2 p-2 text-light"
                      style={{ backgroundColor: "rgb(0,202,48)" }}
                    >
                      Set password
                    </button>
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
export default SetNewPassword;
