const BasicDetail = () => {
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
                              style={{ marginTop: "72%" }}
                            >
                              Sell or Rent your Property On beyondBHK.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card bg-transparent border border-0">
                          <div class="card-body margin-auto">
                            <p class="card-text" style={{ marginTop: "75%" }}>
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
                                    top: "44%",
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
                                    top: "67%",
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
                          Basic Details
                        </h5>

                        <div class="card rounded-4 mb-3">
                          <div class="card-body">
                            <div class="container">
                              <div class="row">
                                <form>
                                  <div class="mb-3 text-start">
                                    <label
                                      for="exampleInputEmail1"
                                      class="form-label fw-semibold"
                                    >
                                      Country
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      placeholder="Enter Your Name"
                                    />
                                  </div>
                                  <div class="mb-3 text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      placeholder="Enter Your Name"
                                      class="form-label fw-semibold"
                                    >
                                      City/Village
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="exampleInputPassword1"
                                      placeholder="Enter Your Name"
                                    />
                                  </div>
                                  <div class="mb-3 text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label fw-semibold"
                                    >
                                      Colony/Township/Area/Society
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter Your Name"
                                      id="exampleInputPassword1"
                                    />
                                  </div>
                                  <div class="mb-3 text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label fw-semibold"
                                    >
                                      Property Title
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="exampleInputPassword1"
                                      placeholder="Enter Your Name"
                                    />
                                  </div>
                                  <div class="mb-3 text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label fw-semibold"
                                    >
                                      For-
                                    </label>
                                    <div class="d-flex flex-column flex-md-row ">
                                      <div class="py-1">
                                        <button
                                          type="button"
                                          class="btn  rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(38,118,195)",
                                          }}
                                        >
                                          New&nbsp;Booking
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button mx-1"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Sale
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Rent
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button mx-1"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          PG
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class=" text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label fw-semibold"
                                    >
                                      I am-
                                    </label>
                                    <div class="d-flex flex-column flex-md-row">
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(38,118,195)",
                                          }}
                                        >
                                          Owner
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res- mx-1"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Builder
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Agent
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class=" text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label fw-semibold"
                                    >
                                      It is-
                                    </label>
                                    <div class="d-flex flex-column flex-md-row">
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(38,118,195)",
                                          }}
                                        >
                                          Residential
                                        </button>
                                      </div>
                                      <div class="py-1 mx-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Commercial
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Industrial
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class=" text-start">
                                    <div class="d-flex flex-column flex-md-row">
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Farm
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-8 text-light res-button mx-1"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Project Land
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                            <div class=" text-start">
                              <div class="d-flex flex-column flex-md-row">
                                <div class="py-1">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn rounded-pill flex-grow-8 text-light res-button mx-2"
                                    style={{
                                      backgroundColor: "rgb(38,118,195)",
                                    }}
                                  >
                                    Flat
                                  </button>
                                </div>
                                <div class="py-1">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn rounded-pill flex-grow-8 text-light res-button"
                                    style={{
                                      backgroundColor: "rgb(127,175,219)",
                                    }}
                                  >
                                    Independent Floor
                                  </button>
                                </div>
                                <div class="py-1">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn rounded-pill flex-grow-8 text-light res-button mx-1"
                                    style={{
                                      backgroundColor: "rgb(127,175,219)",
                                    }}
                                  >
                                    House/Villa
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="mb-3 text-start">
                              <div class="d-flex flex-row mb-3">
                                <div class="py-1">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn rounded-pill flex-grow-8 text-light res-button mx-1"
                                    style={{
                                      backgroundColor: "rgb(127,175,219)",
                                    }}
                                  >
                                    Plot/Land
                                  </button>
                                </div>
                                <div class="py-1">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn rounded-pill flex-grow-8 text-light res-button mx-1"
                                    style={{
                                      backgroundColor: "rgb(127,175,219)",
                                    }}
                                  >
                                    Others
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="container-fluid ">
                              <div class="row align-items-start ">
                                <div class="col ">
                                  <div class="d-flex flex-row  responsive-3">
                                    <div class="p-2">
                                      {" "}
                                      <a href="photos">
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
export default BasicDetail;
