import Slider from "react-slick";
const Engineer = () => {
  var settings2 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "-30px",
          right: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "-30px",
          left: "93%",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <>
      <div className="questrial-regular">
        <div class="container text-center ">
          <div class="row align-items-start">
            <div class="col">
              <div class="card my-3 bg-transparent border-0">
                <div class="card-body">
                  <a
                    href="#"
                    class="btn rounded-pill text-light px-4"
                    style={{ backgroundColor: "rgb(1,97,185)" }}
                  >
                    <i
                      class="bi bi-dot"
                      style={{ fontSize: "17px", color: "rgb(0,203,49)" }}
                    ></i>
                    Engineer
                  </a>
                  <h1 class="card-title font-size-service fw-bold">
                    {" "}
                    <i>Investing</i> in your
                    <br />
                    tomorrow,today
                  </h1>

                  <p class="card-text col-sm-4 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum ullam et veritatis voluptates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid text-center">
          <div class="row align-items-start">
            <div class="col">
              <div
                class="card mb-3 border-0"
                style={{
                  height: "500px",
                  borderTopLeftRadius: "150px",
                  borderTopRightRadius: "150px",
                }}
              >
                <img
                  src="engineer1.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{
                    height: "500px",
                    borderTopLeftRadius: "150px",
                    borderTopRightRadius: "150px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col-sm-8 mx-auto">
              <div class="card border-0 my-3">
                <div class="card-body">
                  <h1 class="card-title font-size-interior fw-semibold">
                    <i>Beyond</i> BHK work life is the best around the world
                  </h1>
                  <p
                    class="card-text col-sm-8 mx-auto"
                    style={{ fontSize: "14px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel, minus consectetur quis magnam consequatur eos quas nemo
                    similique omnis laborum eum doloremque delectus perspiciatis
                    facere quos? Iusto, accusantium? Quasi et fugiat dolores
                    voluptatem repellendus quas nisi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col-sm-8 mx-auto">
              <div class="card border-0 my-2">
                <div class="card-body">
                  <h1 class="card-title font-size-interior fw-semibold">
                    Tuning in to what really matters
                  </h1>
                  <p
                    class="card-text col-sm-8 mx-auto"
                    style={{ fontSize: "14px" }}
                  >
                    We believe that technology and human-centered desidn are
                    revolutionizing brand experiences. Remarkable innovations
                    are allowing products to become more sentient and connected,
                    enabling greater connection between people. Our role is to
                    ensure that each product experience is attuned to people's
                    needs and relevent to the rhythm and habits of their daily
                    lives. Through first and secondary research, we identify
                    what will really matter to users and we never let go of the
                    vision that inspires great products.
                  </p>
                  <p
                    class="card-text col-sm-8 mx-auto"
                    style={{ fontSize: "14px" }}
                  >
                    We believe that technology and human-centered desidn are
                    revolutionizing brand experiences. Remarkable innovations
                    are allowing products to become more sentient and connected,
                    enabling greater connection between people. Our role is to
                    ensure that each product experience is attuned to people's
                    needs and relevent to the rhythm and habits of their daily
                    lives. Through first and secondary research, we identify
                    what will really matter to users and we never let go of the
                    vision that inspires great products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col-sm-8 mx-auto">
              <div class="card border-0 my-2">
                <div class="card-body">
                  <h1 class="card-title font-size-interior-1 fw-semibold">
                    Business planning & strategy:
                  </h1>
                  <p
                    class="card-text col-sm-9 mx-auto"
                    style={{ fontSize: "14px" }}
                  >
                    We believe that technology and human-centered desidn are
                    revolutionizing brand experiences. Remarkable innovations
                    are allowing products to become more sentient and connected,
                    enabling greater connection between people. Our role is to
                    ensure that each product experience is attuned to people's
                    needs and relevent to the rhythm and habits of their daily
                    lives. Through first and secondary research, we identify
                    what will really matter to users and we never let go of the
                    vision that inspires great products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: " rgb(234,242,253)" }}>
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <div class="card bg-transparent border border-0">
                  <div class="h1 mt-5 fw-bolder font-size-testimonial pt-3">
                    Testimonials from
                  </div>
                  <div class="h1 fw-bolder fst-italic font-size-testimonial">
                    Customers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="row align-items-start">
              <div class="col">
                <div class="row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card border border-0 bg-transparent">
                      <div class="card-body ">
                        <p class="card-text">
                          Group One is excited to present this exeptional
                          property in the prestegious location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid pb-5">
              <div class="row align-items-start">
                <div class="col">
                  <div class="card bg-transparent border border-0">
                    <div class="card-body">
                      <div className="slider-container ">
                        <Slider {...settings2}>
                          <div className="">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                            color: "rgb(0,96,185)",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card mx-2">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="card mx-2">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <img
                                      src="person.jpg"
                                      class="img-fluid rounded-circle"
                                      alt=""
                                      style={{ width: "45px", height: "45px" }}
                                    ></img>
                                  </div>
                                  <div class="p-2">
                                    <figure>
                                      <blockquote class="blockquote">
                                        <p className="fw-bold">Michael Scott</p>
                                      </blockquote>
                                      <figcaption
                                        class="blockquote-footer-1"
                                        style={{ color: "rgb(151,146,146)" }}
                                      >
                                        Home Seller,USA
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                  <div class="container ">
                                    <div class="row align-items-start">
                                      <div class="col-sm-8">
                                        <hr />
                                      </div>
                                      <div class="col">
                                        <i
                                          class="fa-solid fa-quote-left"
                                          style={{
                                            fontSize: "35px",
                                            marginTop: "-20px",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </h6>
                                <p class="card-text">
                                  Efficient tenant screening and maintenance
                                  turn my property into hassle-free income.
                                </p>
                                <div class="d-flex flex-row">
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                  <div class="p-2">
                                    <i
                                      class="bi bi-star-fill"
                                      style={{ color: "rgb(254,213,100)" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
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
export default Engineer;
