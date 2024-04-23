const PhotosVideos = () => {
  return (
    <>
      <div class="container-fluid text-center">
        <div class="row align-items-start ">
          <div class="col">
            <div className="background" style={{ height: "100%" }}>
              <div class="container-fluid">
                <div class="row align-items-start">
                  <div class="col ">
                    <div class="row ">
                      <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card bg-transparent border border-0">
                          <div class="card-body ">
                            <p
                              class="card-text text-light fw-bold fs-5 text-start mx-4 "
                              style={{ marginTop: "60%" }}
                            >
                              Sell or Rent your Property On beyondBHK.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card bg-transparent border border-0">
                          <div class="card-body margin-auto">
                            <p class="card-text" style={{ marginTop: "65%" }}>
                              <div class="d-grid gap-3 col-8">
                                <button
                                  class="btn btn-lg text-light"
                                  type="button"
                                  style={{
                                    backgroundColor: "rgb(0,202,48)",
                                    height: "52px",
                                  }}
                                >
                                  Basic Details
                                </button>
                                <i
                                  class="bi bi-check-circle-fill d-none d-md-inline"
                                  style={{
                                    position: "absolute",
                                    left: "63%",
                                    top: "41%",
                                    color: "rgb(115,210,68)",
                                  }}
                                ></i>
                                <button
                                  class="btn btn-lg text-light fs"
                                  type="button"
                                  style={{
                                    backgroundColor: "rgb(0,202,48)",
                                    height: "52px",
                                  }}
                                >
                                  Property Details
                                </button>

                                <button
                                  class="btn btn-lg text-light"
                                  type="button"
                                  style={{
                                    backgroundColor: "rgb(0,202,48)",
                                    height: "52px",
                                  }}
                                >
                                  Photos/Videos
                                </button>
                                <i
                                  class="bi bi-check-circle-fill d-none d-md-inline"
                                  style={{
                                    position: "absolute",
                                    left: "63%",
                                    top: "65%",
                                    color: "rgb(115,210,68)",
                                  }}
                                ></i>
                                <button
                                  class="btn btn-lg text-light"
                                  type="button"
                                  style={{
                                    backgroundColor: "rgb(0,202,48)",
                                    height: "52px",
                                  }}
                                >
                                  Facilities
                                </button>

                                <button
                                  class="btn btn-lg text-light"
                                  type="button"
                                  style={{
                                    backgroundColor: "rgb(0,202,48)",
                                    height: "52px",
                                  }}
                                >
                                  Rate/Plan
                                </button>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-5 mb-3 mb-sm-0 ">
                        <h5
                          class="card-title text-start mb-2 mx-4 text-light"
                          style={{ marginTop: "15%" }}
                        >
                          Photos/Videos
                        </h5>

                        <div class="card rounded-4 mb-3">
                          <div class="card-body">
                            <div class="container">
                              <div class="row">
                                <form>
                                  <div class="mb-3 text-start">
                                    <h5 class="card-title">Upload Pictures</h5>

                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col">
                                        <div
                                          class="card"
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          >
                                            <h5 class="card-title">
                                              <label
                                                for="formFileMultiple"
                                                class="form-label "
                                                style={{
                                                  marginTop: "8%",
                                                  marginLeft: "35%",
                                                }}
                                              >
                                                <i
                                                  class="bi bi-plus fs-3"
                                                  style={{
                                                    color: "rgb(159,158,159)",
                                                  }}
                                                ></i>
                                              </label>
                                              <input
                                                class="form-control"
                                                type="file"
                                                id="formFileMultiple"
                                                multiple
                                              />
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card"
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card"
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                                      <div class="col">
                                        <div
                                          class="card "
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          >
                                            <div
                                              class="card-body rounded-2"
                                              style={{
                                                backgroundColor:
                                                  "rgb(246,247,246)",
                                              }}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card "
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card "
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div class="container">
                              <div class="row">
                                <form>
                                  <div class="mb-3 text-start">
                                    <h5 class="card-title">Upload Videos</h5>

                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col">
                                        <div
                                          class="card"
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          >
                                            <h5 class="card-title">
                                              <label
                                                for="formFileMultiple"
                                                class="form-label"
                                                style={{
                                                  marginTop: "8%",
                                                  marginLeft: "35%",
                                                }}
                                              >
                                                <i
                                                  class="bi bi-plus fs-3 "
                                                  style={{
                                                    color: "rgb(159,158,159)",
                                                  }}
                                                ></i>
                                              </label>
                                              <input
                                                class="form-control"
                                                type="file"
                                                id="formFileMultiple"
                                                multiple
                                              />
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card"
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card"
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                                      <div class="col">
                                        <div
                                          class="card "
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          >
                                            <div
                                              class="card-body rounded-2"
                                              style={{
                                                backgroundColor:
                                                  "rgb(246,247,246)",
                                              }}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card "
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="card "
                                          style={{ height: "100px" }}
                                        >
                                          <div
                                            class="card-body rounded-2"
                                            style={{
                                              backgroundColor:
                                                "rgb(246,247,246)",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                            <div class="container-fluid ">
                              <div class="row align-items-start ">
                                <div class="col ">
                                  <div class="d-flex flex-row justify-content-center responsive-3">
                                    <div class="p-2">
                                      {" "}
                                      <a href="facilities">
                                        <button
                                          type="button"
                                          class="btn  border border-0 rounded-3 text-light mt-2"
                                          style={{
                                            width: "220px",
                                            height: "50px",
                                            borderColor: "rgb(81,92,238)",
                                            backgroundColor: "rgb(0,202,48)",
                                          }}
                                        >
                                          <span className="fs-5">
                                            Save & Next
                                          </span>
                                        </button>
                                      </a>
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
export default PhotosVideos;
