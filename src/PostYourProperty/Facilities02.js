const Facilities02 = () => {
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
                              style={{ marginTop: "73%" }}
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
                          Facilities
                        </h5>

                        <div class="card rounded-4 mb-3">
                          <div class="card-body">
                            <div class="container mt-3">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto align-items-center d-flex responsive2">
                                      <label
                                        class="form-label  col-12 fw-semibold text-start"
                                        for="inlineFormCheck"
                                      >
                                        Bank Loan Available
                                      </label>
                                      <div class="form-check form-check-inline">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio1"
                                          value="Yes"
                                          checked
                                        />
                                        <label
                                          class="form-check-label"
                                          for="inlineRadio1"
                                        >
                                          Yes
                                        </label>
                                      </div>
                                      <div class="form-check form-check-inline">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio2"
                                          value="No"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="inlineRadio2"
                                        >
                                          No
                                        </label>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="container mt-2">
                              <div class="row">
                                <form>
                                  <div class="mb-3 text-start">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label fw-semibold"
                                    >
                                      Ownership
                                    </label>
                                    <div class="d-flex flex-column flex-md-row ">
                                      <div class="py-1">
                                        <button
                                          type="button"
                                          class="btn  rounded-pill flex-grow-10 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(38,118,195)",
                                          }}
                                        >
                                          Free&nbsp;Hold
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-10 text-light res-button mx-1"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Lease&nbsp;Hold
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-10 text-light res-button"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Power&nbsp;of&nbsp;attorney
                                        </button>
                                      </div>
                                      <div class="py-1">
                                        {" "}
                                        <button
                                          type="button"
                                          class="btn rounded-pill flex-grow-10 text-light res-button mx-1"
                                          style={{
                                            backgroundColor: "rgb(127,175,219)",
                                          }}
                                        >
                                          Coperating&nbsp;Society
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-semibold mt-1"
                                              for="inlineFormCheck"
                                            >
                                              Property Rate
                                            </label>
                                          </div>
                                          <div
                                            class=""
                                            style={{ marginLeft: "5%" }}
                                          >
                                            <div class="mb-3">
                                              <div
                                                class="input-group"
                                                style={{
                                                  width: "145px",
                                                }}
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control  border-end-0"
                                                  id="length"
                                                  placeholder="5Lac"
                                                  style={{
                                                    height: "35px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                />
                                                <button
                                                  class="btn  dropdown-toggle"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                  style={{
                                                    height: "35px",
                                                    width: "85px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                >
                                                  Rupees{" "}
                                                  <i class="bi bi-caret-down-fill"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-column flex-md-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label mt-1 fw-semibold"
                                              for="inlineFormCheck"
                                            >
                                              Broker Charge
                                            </label>
                                          </div>
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-bold"
                                              for="inlineFormCheck"
                                            >
                                              <button
                                                type="button"
                                                class="btn rounded-pill flex-grow-11 text-light res-button "
                                                style={{
                                                  backgroundColor:
                                                    "rgb(127,175,219)",
                                                  marginLeft: "20%",
                                                }}
                                              >
                                                Yes
                                              </button>
                                            </label>
                                          </div>
                                          <label
                                            class="form-label fw-bold margin-5"
                                            for="inlineFormCheck"
                                          >
                                            <button
                                              type="button"
                                              class="btn rounded-pill flex-grow-11 text-light res-button mx-4"
                                              style={{
                                                backgroundColor:
                                                  "rgb(127,175,219)",
                                              }}
                                            >
                                              No
                                            </button>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-semibold mt-1"
                                              for="inlineFormCheck"
                                            >
                                              Brokerage
                                            </label>
                                          </div>
                                          <div
                                            class=""
                                            style={{ marginLeft: "5%" }}
                                          >
                                            <div class="mb-3">
                                              <div
                                                class="input-group"
                                                style={{
                                                  width: "145px",
                                                }}
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control  border-end-0"
                                                  id="length"
                                                  placeholder="59.59"
                                                  style={{
                                                    height: "35px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                />
                                                <button
                                                  class="btn  dropdown-toggle"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                  style={{
                                                    height: "35px",
                                                    width: "70px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                >
                                                  Unit{" "}
                                                  <i class="bi bi-caret-down-fill"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-column flex-md-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-semibold mt-1"
                                              for="inlineFormCheck"
                                            >
                                              Advance/booking amount
                                            </label>
                                          </div>
                                          <div
                                            class=""
                                            style={{ marginLeft: "5%" }}
                                          >
                                            <div class="mb-3">
                                              <div
                                                class="input-group"
                                                style={{
                                                  width: "145px",
                                                }}
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control  border-end-0"
                                                  id="length"
                                                  placeholder="59.59"
                                                  style={{
                                                    height: "35px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                />
                                                <button
                                                  class="btn  dropdown-toggle"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                  style={{
                                                    height: "35px",
                                                    width: "70px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                >
                                                  Unit{" "}
                                                  <i class="bi bi-caret-down-fill"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-column flex-md-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-semibold mt-1"
                                              for="inlineFormCheck"
                                            >
                                              Monthly Maintenance
                                            </label>
                                          </div>
                                          <div
                                            class=""
                                            style={{ marginLeft: "5%" }}
                                          >
                                            <div class="mb-3">
                                              <div
                                                class="input-group"
                                                style={{
                                                  width: "145px",
                                                }}
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control  border-end-0"
                                                  id="length"
                                                  placeholder="59.59"
                                                  style={{
                                                    height: "35px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                />
                                                <button
                                                  class="btn  dropdown-toggle"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                  style={{
                                                    height: "35px",
                                                    width: "70px",
                                                    borderColor:
                                                      "rgb(202,203,203)",
                                                  }}
                                                >
                                                  Unit{" "}
                                                  <i class="bi bi-caret-down-fill"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container mb-2">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-column flex-md-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label mt-1 fw-semibold"
                                              for="inlineFormCheck"
                                            >
                                              Payment Plan
                                            </label>
                                          </div>
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-bold"
                                              for="inlineFormCheck"
                                            >
                                              <button
                                                type="button"
                                                class="btn  mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(38,118,195)",
                                                }}
                                              ></button>
                                            </label>
                                          </div>
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-bold"
                                              for="inlineFormCheck"
                                            >
                                              <button
                                                type="button"
                                                class="btn  mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(127,175,219)",
                                                }}
                                              ></button>
                                            </label>
                                          </div>
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-bold"
                                              for="inlineFormCheck"
                                            >
                                              <button
                                                type="button"
                                                class="btn  mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(127,175,219)",
                                                }}
                                              ></button>
                                            </label>
                                          </div>
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-bold"
                                              for="inlineFormCheck"
                                            >
                                              <button
                                                type="button"
                                                class="btn  mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(127,175,219)",
                                                }}
                                              ></button>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-column flex-md-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label mt-2 fw-semibold"
                                              for="inlineFormCheck"
                                            >
                                              Full Payment Time
                                            </label>
                                          </div>
                                          <div class="mx-3 ">
                                            <div
                                              class="mb-3"
                                              style={{ marginLeft: "25px" }}
                                            >
                                              <div
                                                class="input-group"
                                                style={{
                                                  width: "150px",
                                                }}
                                              >
                                                <button
                                                  class="btn rounded-start-pill text-light"
                                                  type="button"
                                                  aria-expanded="false"
                                                  style={{
                                                    height: "35px",
                                                    width: "70px",

                                                    backgroundColor:
                                                      "rgb(38,118,195)",
                                                  }}
                                                >
                                                  60
                                                </button>

                                                <button
                                                  class="btn  dropdown-toggle rounded-end-pill text-light"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                  style={{
                                                    height: "35px",
                                                    width: "80px",
                                                    backgroundColor:
                                                      "rgb(38,118,195)",
                                                  }}
                                                >
                                                  Days{" "}
                                                  <i class="bi bi-caret-down-fill"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      class="dropdown-item"
                                                      href="#"
                                                    >
                                                      Dropdown link
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col">
                                        <div class="d-flex flex-column flex-md-row">
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-semibold"
                                              for="inlineFormCheck"
                                            >
                                              Rera Approval
                                            </label>
                                          </div>
                                          <div class="">
                                            {" "}
                                            <label
                                              class="form-label fw-bold"
                                              for="inlineFormCheck"
                                            >
                                              <button
                                                type="button"
                                                class="btn rounded-pill flex-grow-11 text-light res-button "
                                                style={{
                                                  backgroundColor:
                                                    "rgb(38,118,195)",
                                                  marginLeft: "68px",
                                                }}
                                              >
                                                Yes
                                              </button>
                                            </label>
                                          </div>
                                          <label
                                            class="form-label fw-bold margin-6"
                                            for="inlineFormCheck"
                                          >
                                            <button
                                              type="button"
                                              class="btn rounded-pill flex-grow-11 text-light res-button mx-3"
                                              style={{
                                                backgroundColor:
                                                  "rgb(127,175,219)",
                                              }}
                                            >
                                              No
                                            </button>
                                          </label>
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
                                  <div class="d-flex flex-row justify-content-center  responsive-3">
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
export default Facilities02;
