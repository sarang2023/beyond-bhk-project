import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="questrial-regular">
        <div class="container mt-3">
          <div class="row align-items-start">
            <div class="col-sm-9 mx-auto">
              <div class="card border-0 bg-transparent">
                <div class="card-body text-start">
                  <h5 class="card-title fw-bold">My Profile</h5>
                  <h6
                    class="card-subtitle mb-2 "
                    style={{ color: "rgb(88,88,89)" }}
                  >
                    Updated your profile, contact details and preferences to
                    personalize your experiences.
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="row align-items-start">
              <div class="col-sm-9 mx-auto">
                <img
                  src="profile.jpg"
                  class="img-fluid rounded-circle mx-2"
                  style={{ width: "80px", height: "80px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="row align-items-start">
              <div class="container ">
                <div class="row align-items-start">
                  <div class="col-sm-9 mx-auto">
                    <div class="row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card border-0">
                          <div class="card-body">
                            <h5 class="card-title">Profile Picture</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">
                              PNG &lt; JPEG under 15MB
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 ">
                        <div class="card text-xxl-end border-0">
                          <div class="card-body">
                            <button
                              type="button"
                              class="btn btn-dark mx-1 rounded-pill"
                            >
                              <i class="bi bi-upload"></i> Upload Image
                            </button>
                            <button
                              type="button"
                              class="btn btn-light border rounded-pill"
                              style={{
                                borderColor: "rgb(88,88,89)",
                                color: "rgb(88,88,89)",
                              }}
                            >
                              <i class="bi bi-trash mx-1"></i>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="row align-items-start">
              <div class="col-sm-9 mx-auto">
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      id="inputEmail4"
                      placeholder="Chaitanya"
                      style={{ borderColor: "rgb(93,154,210)" }}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      id="inputPassword4"
                      placeholder="goyal"
                      style={{ borderColor: "rgb(88,88,88)" }}
                    />
                  </div>
                  <hr />
                </form>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row align-items-start">
              <div class="col-sm-9 mx-auto">
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      id="inputEmail4"
                      placeholder="Chaitanyagoyal49@gmail.com"
                      style={{ borderColor: "rgb(88,88,88)" }}
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card text-xxl-end border-0 ">
                      <div class="card-body">
                        <p class="card-text mt-3">
                          <button
                            type="button"
                            class="btn rounded-pill py-1"
                            style={{
                              borderColor: "rgb(88,88,89)",
                              color: "rgb(88,88,89)",
                            }}
                          >
                            <i class="bi bi-pencil mx-1"></i>Change Email
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <button
                      type="button"
                      class="btn  rounded-pill py-1"
                      style={{
                        borderColor: "rgb(88,88,89)",
                        color: "rgb(88,88,89)",
                      }}
                    >
                      <i class="bi bi-plus"></i> Add another Email
                    </button>
                  </div>
                  <hr />
                </form>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row align-items-start">
              <div class="col-sm-9 mx-auto">
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      id="inputEmail4"
                      placeholder="7899877479"
                      style={{ borderColor: "rgb(88,88,88)" }}
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card text-xxl-end border-0 ">
                      <div class="card-body">
                        <p class="card-text mt-3">
                          <button
                            type="button"
                            class="btn rounded-pill py-1"
                            style={{
                              borderColor: "rgb(88,88,89)",
                              color: "rgb(88,88,89)",
                            }}
                          >
                            <i class="bi bi-pencil mx-1"></i>Change Phone Number
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <button
                      type="button"
                      class="btn  rounded-pill py-1"
                      style={{
                        borderColor: "rgb(88,88,89)",
                        color: "rgb(88,88,89)",
                      }}
                    >
                      <i class="bi bi-plus"></i> Add another Phone Number
                    </button>
                  </div>
                  <hr />
                </form>
              </div>
            </div>
          </div>
          <div class="container mb-5">
            <div class="row align-items-start">
              <div class="col-sm-9 mx-auto">
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      id="inputEmail4"
                      placeholder="31,dwarka dham colony,mangliya"
                      style={{ borderColor: "rgb(88,88,88)" }}
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card text-xxl-end border-0 ">
                      <div class="card-body">
                        <p class="card-text mt-3">
                          <button
                            type="button"
                            class="btn rounded-pill py-1"
                            style={{
                              borderColor: "rgb(88,88,89)",
                              color: "rgb(88,88,89)",
                            }}
                          >
                            <i class="bi bi-pencil mx-1"></i>Change Address
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <button
                      type="button"
                      class="btn  rounded-pill py-1"
                      style={{
                        borderColor: "rgb(88,88,89)",
                        color: "rgb(88,88,89)",
                      }}
                    >
                      <i class="bi bi-plus"></i> Add another Address
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
