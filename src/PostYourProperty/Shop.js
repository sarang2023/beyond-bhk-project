const Shop = () => {
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
                          <div class="card-body">
                            <p
                              class="card-text text-light fw-bold fs-5 text-start mx-4 "
                              style={{ marginTop: "90%" }}
                            >
                              Sell or Rent your Property On beyondBHK.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card bg-transparent border border-0">
                          <div class="card-body margin-auto">
                            <p class="card-text" style={{ marginTop: "95%" }}>
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
                                    top: "49%",
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
                                    top: "70%",
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
                          Shop/Society/Office
                        </h5>

                        <div class="card rounded-4 mb-3">
                          <div class="card-body">
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
                                        Total Area
                                      </label>
                                    </div>
                                    <div
                                      class=""
                                      style={{ marginLeft: "38px" }}
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
                                              borderColor: "rgb(202,203,203)",
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
                                              borderColor: "rgb(202,203,203)",
                                            }}
                                          >
                                            Unit{" "}
                                            <i class="bi bi-caret-down-fill"></i>
                                          </button>
                                          <ul class="dropdown-menu">
                                            <li>
                                              <a class="dropdown-item" href="#">
                                                Dropdown link
                                              </a>
                                            </li>
                                            <li>
                                              <a class="dropdown-item" href="#">
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
                                  <div class="d-flex flex-row">
                                    <div class="">
                                      {" "}
                                      <label
                                        class="form-label fw-semibold mt-1"
                                        for="inlineFormCheck"
                                      >
                                        Covered Area
                                      </label>
                                    </div>
                                    <div class="mx-3">
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
                                              borderColor: "rgb(202,203,203)",
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
                                              borderColor: "rgb(202,203,203)",
                                            }}
                                          >
                                            Unit{" "}
                                            <i class="bi bi-caret-down-fill"></i>
                                          </button>
                                          <ul class="dropdown-menu">
                                            <li>
                                              <a class="dropdown-item" href="#">
                                                Dropdown link
                                              </a>
                                            </li>
                                            <li>
                                              <a class="dropdown-item" href="#">
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

                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto">
                                      <label
                                        class="form-label fw-semibold mt-3"
                                        for="inlineFormCheck"
                                      >
                                        Size
                                      </label>
                                    </div>
                                    <div class="col res">
                                      <div class="mb-3">
                                        <label
                                          for="length"
                                          class="form-label length"
                                          style={{ marginRight: "68px" }}
                                        >
                                          Front
                                        </label>
                                        <div
                                          class="input-group"
                                          style={{
                                            width: "150px",
                                            marginLeft: "46px",
                                          }}
                                        >
                                          <input
                                            type="text"
                                            class="form-control  border-end-0 length-1"
                                            id="length"
                                            placeholder="59.59"
                                            style={{
                                              height: "35px",
                                              borderColor: "rgb(202,203,203)",
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
                                              borderColor: "rgb(202,203,203)",
                                            }}
                                          >
                                            Unit{" "}
                                            <i class="bi bi-caret-down-fill"></i>
                                          </button>
                                          <ul class="dropdown-menu">
                                            <li>
                                              <a class="dropdown-item" href="#">
                                                Dropdown link
                                              </a>
                                            </li>
                                            <li>
                                              <a class="dropdown-item" href="#">
                                                Dropdown link
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div class="col-sm-12 col-md-6 mt-1 ">
                                  <div class="mb-3 res-1">
                                    <label
                                      for="breadth"
                                      class="form-label length-2"
                                      style={{ marginRight: "180px" }}
                                    >
                                      Length
                                    </label>
                                    <div
                                      class="input-group"
                                      style={{ width: "150px" }}
                                    >
                                      <input
                                        type="text"
                                        class="form-control  border-end-0"
                                        id="breadth"
                                        placeholder="59.59"
                                        style={{
                                          height: "35px",
                                          borderColor: "rgb(202,203,203)",
                                        }}
                                      />
                                      <button
                                        class="btn dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                          height: "35px",
                                          width: "70px",
                                          borderColor: "rgb(202,203,203)",
                                        }}
                                      >
                                        Unit{" "}
                                        <i class="bi bi-caret-down-fill"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#">
                                            Dropdown link
                                          </a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#">
                                            Dropdown link
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 ">
                                    <div class="col-auto">
                                      <label
                                        class=" form-label fw-semibold mt-1"
                                        for="inlineFormCheck"
                                      >
                                        Total floor
                                      </label>
                                    </div>
                                    <div class="col">
                                      <div class="mb-3">
                                        <div class="">
                                          <button
                                            class="btn dropdown-toggle scale"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{
                                              height: "35px",
                                              width: "100px",
                                              marginLeft: "-53px",
                                              borderColor: "rgb(202,203,203)",
                                            }}
                                          >
                                            Unit{" "}
                                            <i class="bi bi-caret-down-fill"></i>
                                          </button>
                                          <ul class="dropdown-menu">
                                            <li>
                                              <a class="dropdown-item" href="#">
                                                Dropdown link
                                              </a>
                                            </li>
                                            <li>
                                              <a class="dropdown-item" href="#">
                                                Dropdown link
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div class="col-sm-12 col-md-6 mt-1 ">
                                  <div class="mb-3">
                                    <div
                                      class="col-auto"
                                      style={{ display: "flex" }}
                                    >
                                      <label
                                        class=" form-label fw-semibold mt-1"
                                        for="inlineFormCheck"
                                      >
                                        Your floor
                                      </label>
                                      <div class="margin margin-1">
                                        <button
                                          class="btn dropdown-toggle scale"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                          style={{
                                            height: "35px",
                                            width: "100px",
                                            marginLeft: "5px",
                                            borderColor: "rgb(202,203,203)",
                                          }}
                                        >
                                          Unit{" "}
                                          <i class="bi bi-caret-down-fill"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#">
                                              Dropdown link
                                            </a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">
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

                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1 margin-container">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto">
                                      <label
                                        class="form-label fw-semibold "
                                        for="inlineFormCheck"
                                      >
                                        Condition
                                      </label>
                                    </div>
                                    <div class="col-sm-12 col-md-6 mt-1">
                                      <div class="my-3">
                                        <div
                                          class="d-flex justify-content-around responsive2"
                                          style={{
                                            marginLeft: "0px",
                                          }}
                                        >
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-4 text-light res-button-2 res-button max res-button"
                                            style={{
                                              backgroundColor:
                                                "rgb(38,118,195)",
                                            }}
                                          >
                                            Ready to move
                                          </button>
                                          <button
                                            type="button"
                                            class="btn  mx-2 rounded-pill flex-grow-4 text-light border res-button-2 border-0 max"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          >
                                            Under Construction
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div class="mb-3 mt-2 text-start">
                              <label
                                for="exampleInputPassword1"
                                class="form-label fw-semibold px-3"
                              >
                                Furnishing
                              </label>
                              <div class="d-flex flex-column flex-md-row ">
                                <div class="py-1">
                                  <button
                                    type="button"
                                    class="btn mx-3 rounded-pill flex-grow-8 text-light res-button"
                                    style={{
                                      backgroundColor: "rgb(38,118,195)",
                                    }}
                                  >
                                    Fully&nbsp;Furnish
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
                                    Semi&nbsp;Furnish
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
                                    Un&nbsp;Furnish
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="container mt-2">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto">
                                      <label
                                        class="form-label fw-semibold"
                                        for="inlineFormCheck"
                                      >
                                        Face
                                      </label>
                                    </div>
                                    <div class="col-sm-12 col-md-8 mt-1">
                                      <div class="my-3">
                                        <div
                                          class="d-flex justify-content-around responsive2"
                                          style={{
                                            marginLeft: "15px",
                                          }}
                                        >
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-1 text-light res-button res-button-1 "
                                            style={{
                                              backgroundColor:
                                                "rgb(38,118,195)",
                                            }}
                                          >
                                            East
                                          </button>
                                          <button
                                            type="button"
                                            class="btn  mx-2 rounded-pill flex-grow-1 text-light border res-button-1 border-0"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          >
                                            West
                                          </button>
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-1 text-light border res-button-1 border-0 res-button"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          >
                                            North
                                          </button>
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-1 text-light border res-button-1  border-0"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          >
                                            South
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto">
                                      <label
                                        class="form-label fw-semibold"
                                        for="inlineFormCheck"
                                      >
                                        Best For
                                      </label>
                                    </div>
                                    <div class="col-sm-12 col-md-8 mt-1">
                                      <div class="my-3">
                                        <div
                                          class="d-flex justify-content-around responsive2"
                                          style={{
                                            marginLeft: "0px",
                                          }}
                                        >
                                          <button
                                            type="button"
                                            class="btn  mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                            style={{
                                              backgroundColor:
                                                "rgb(38,118,195)",
                                            }}
                                          ></button>
                                          <button
                                            type="button"
                                            class="btn  mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          ></button>
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          ></button>
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-2 text-light border border-0 res-button res-button-1 width"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          ></button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto">
                                      <label
                                        class="form-label fw-semibold"
                                        for="inlineFormCheck"
                                      >
                                        Washroom
                                      </label>
                                    </div>
                                    <div class="col-sm-12 col-md-6 mt-1">
                                      <div class="my-3">
                                        <div
                                          class="d-flex justify-content-around responsive2"
                                          style={{ marginLeft: "25px" }}
                                        >
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-5 text-light res-button res-button-2  "
                                            style={{
                                              backgroundColor:
                                                "rgb(38,118,195)",
                                            }}
                                          ></button>
                                          <button
                                            type="button"
                                            class="btn  mx-2 rounded-pill flex-grow-5 text-light border res-button-2 border-0"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          ></button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-md-6 mt-1">
                                  <form class="row g-3 align-items-center">
                                    <div class="col-auto">
                                      <label
                                        class="form-label fw-semibold"
                                        for="inlineFormCheck"
                                      >
                                        Parking
                                      </label>
                                    </div>
                                    <div class="col-sm-12 col-md-6 mt-1">
                                      <div class="my-3">
                                        <div
                                          class="d-flex justify-content-around responsive2 "
                                          style={{ marginLeft: "48px" }}
                                        >
                                          <button
                                            type="button"
                                            class="btn mx-2 rounded-pill flex-grow-5 text-light res-button"
                                            style={{
                                              backgroundColor:
                                                "rgb(38,118,195)",
                                            }}
                                          ></button>
                                          <button
                                            type="button"
                                            class="btn  mx-2 rounded-pill flex-grow-5 text-light border res-button-2 border-0"
                                            style={{
                                              backgroundColor:
                                                "rgb(127,175,219)",
                                            }}
                                          ></button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div class="container-fluid ">
                              <div class="row align-items-start ">
                                <div class="col ">
                                  <div class="d-flex flex-row justify-content-center responsive-3">
                                    <div class="p-2">
                                      {" "}
                                      <a href="factory">
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
export default Shop;
