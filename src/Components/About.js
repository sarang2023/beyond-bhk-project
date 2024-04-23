import React from "react";
import Slider from "react-slick";
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div class="container text-center questrial-regular">
        <div class="row align-items-start">
          <div class="col">
            <div class="card py-5 bg-transparent border-0">
              <div class="card-body">
                <h1 class=" font-size-about">
                  About{" "}
                  <i>
                    <b>Beyond</b>
                  </i>{" "}
                  BHK
                </h1>
                <p class="card-text col-sm-6 mx-auto">
                  We take pride in building lasting relationships with our
                  clients, understanding their requirements,and exceeding their
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid text-center questrial-regular">
        <div class="row align-items-start">
          <div class="col">
            <div class="card-group">
              <div class="card">
                <img
                  src="about-1.png"
                  class="card-img-top"
                  alt="..."
                  style={{ height: "425px" }}
                />
              </div>
              <div class="card" style={{ backgroundColor: "rgb(0,97,184)" }}>
                <div class="">
                  <h4 class="card-title mx-2 text-start col-sm-8 p-xxl-3 text-light fw-semibold lh-sm">
                    {" "}
                    Embrace a vibrant lifestyle in the heart of the city with
                    our exceptional property site. Immerse yourself in a dynamic
                    environment where comfort meets style.
                  </h4>
                  <p class="mx-auto col-sm-8 text-start text-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo quam, obcaecati quae doloremque minima beatae earum?
                    Harum ad exercitationem odit. Veritatis vero ipsum at illum
                    dolorem tempora ducimus corrupti sequi, voluptatum nisi
                    laborum, dignissimos blanditiis! Earum fuga quasi obcaecati
                    sequi?
                  </p>
                  <div class="card-group ">
                    <div class="card border-0 bg-transparent">
                      <div class="card-body">
                        <figure>
                          <blockquote class="blockquote text-light fs-4 fw-bold">
                            <p>50+</p>
                          </blockquote>
                          <figcaption class="blockquote-footer text-light">
                            Years Experience
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div class="card border-0 bg-transparent">
                      <div class="card-body">
                        <figure>
                          <blockquote class="blockquote text-light fs-4 fw-bold">
                            <p>9+</p>
                          </blockquote>
                          <figcaption class="blockquote-footer text-light">
                            Satisfied Clients
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div class="card border-0 bg-transparent">
                      <div class="card-body">
                        <figure>
                          <blockquote class="blockquote text-light fs-4 fw-bold">
                            <p>7+</p>
                          </blockquote>
                          <figcaption class="blockquote-footer text-light">
                            Real State Awards
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center questrial-regular">
        <div class="row align-items-start">
          <div class="col">
            <div class="card mt-3 border-0">
              <div class="card-body">
                <h5 class="card-title font-size-about col-sm-8 mx-auto fw-bold">
                  <i>Beyond</i> BHK work life is the best around the world
                </h5>
                <p class="card-text col-sm-4 mx-auto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet nisi quam facere deleniti.
                </p>
                <a
                  href="#"
                  class="btn text-light"
                  style={{ backgroundColor: "rgb(0,202,48)" }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center my-5">
        <div class="row align-items-start">
          <div class="col">
            <div class="row row-cols-1 row-cols-md-4 mb-3 g-4">
              <div class="col">
                <div class="card  mt-3 rounded-2" style={{ height: "100%" }}>
                  <img
                    src="sell.jpg"
                    class="card-img-top h-100 rounded-2"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card h-100 my-5 rounded-2">
                  <img
                    src="house2.jpg"
                    class="card-img-top h-100 rounded-2"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div
                  class="card rounded-2"
                  style={{ height: "128%", marginTop: "-25px" }}
                >
                  <img
                    src="house2.jpg"
                    class="card-img-top h-100 rounded-2"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div
                  class="card h-100 mt-3 rounded-2"
                  style={{ height: "100%" }}
                >
                  <img
                    src="man.jpg"
                    class="card-img-top h-100 rounded-2"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div class="card bg-transparent border-0">
              <div class="card-body ">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h1 class=" font-size-about">
                        <i>
                          <b>Beyond</b>
                        </i>{" "}
                        BHK
                      </h1>
                    </div>
                    <div>
                      <h1 class=" font-size-about">
                        <i>
                          <b>Beyond</b>
                        </i>{" "}
                        BHK
                      </h1>
                    </div>
                    <div>
                      <h1 class=" font-size-about">
                        <i>
                          <b>Beyond</b>
                        </i>{" "}
                        BHK
                      </h1>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center my-3 questrial-regular">
        <div class="row align-items-start">
          <div class="col">
            <div class="card border-0">
              <div class="card-body">
                <h2 class="card-title">Our Advantages</h2>
                <h1 class="col-sm-6 mx-auto font-size-about">
                  Use the opportunities of profitable{" "}
                  <i>
                    <b>Real Estate</b>
                  </i>
                </h1>
                <p class="card-text col-sm-4 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat consequatur amet fuga sapiente!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-3 questrial-regular">
        <div class="row align-items-start">
          <div class="col-sm-10 mx-auto">
            <div
              class="card px-xxl-5 rounded-top-3 rounded-0 border-0 "
              style={{ backgroundColor: "rgb(45,45,45)" }}
            >
              <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card bg-transparent text-light border-0">
                    <div class="card-body">
                      <h5 class="card-title fs-1">01</h5>
                      <img
                        src="Image .webp"
                        class="card-img-top rounded-2"
                        alt="..."
                        style={{ height: "400px" }}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card h-100 bg-transparent text-light fw-bold fs-4 border-0">
                    <div class="card-body d-flex align-items-center">
                      <p class="card-text fw-medium">
                        Choose from a wide range of properties available for
                        sale or rent, encompassing single-family residences,
                        condos, townhouses and beyond. Tailor your property
                        search according to your desired location, price range
                        and specific criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card px-xxl-5 rounded-0 border-0"
              style={{ backgroundColor: "rgb(45,45,45)" }}
            >
              <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card bg-transparent text-light border-0">
                    <div class="card-body">
                      <h5 class="card-title fs-1">02</h5>
                      <img
                        src="for-home.jpg"
                        class="card-img-top rounded-2"
                        alt="..."
                        style={{ height: "400px" }}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card h-100 bg-transparent text-light fw-bold fs-4 border-0">
                    <div class="card-body d-flex align-items-center">
                      <p class="card-text fw-medium">
                        Recognizing the intricacies and challenges of the real
                        estate market, particularly for those new to buying or
                        selling, we have curated a collection of informative
                        articles and comprehensive guides. <br />
                        These valuable resources offer expert tips and guidance
                        on a wide range of topics, from selecting the perfect
                        real estate agent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card px-xxl-5 pb-4 rounded-bottom-3 rounded-0 border-0"
              style={{ backgroundColor: "rgb(45,45,45)" }}
            >
              <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card bg-transparent text-light border-0">
                    <div class="card-body">
                      <h5 class="card-title fs-1">03</h5>
                      <img
                        src="property-value.webp"
                        class="card-img-top rounded-2"
                        alt="..."
                        style={{ height: "400px" }}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card h-100 bg-transparent text-light fw-bold fs-4 border-0">
                    <div class="card-body d-flex align-items-center">
                      <p class="card-text fw-medium">
                        Financing plays a crucial role in the journey of
                        purchasing a home. Our website offers valuable resources
                        on mortgage options, alongside practical tools designed
                        to assist you in calculating your monthly payments and
                        estimating the associated closing costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-3 mb-5 questrial-regular">
        <div class="row align-items-start">
          <div class="col-sm-10 mx-auto">
            <div class="card rounded-0 border-0">
              <div class="row">
                <div class="col-sm-5 mb-3 mb-sm-0">
                  <div class="card h-100 rounded-0">
                    <img
                      src="build.png"
                      class="card-img-top h-100 rounded-0"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="col-sm-6 ms-auto">
                  <div class="card border-0">
                    <div class="card-body">
                      <h5 class="card-title h1">Our Story</h5>
                      <p class="card-text">
                        We faced challenges along the way, from permitting
                        hurdles to unexpected weather delays. But our dedicated
                        team persevered, working tirelessly to bring our vision
                        to life.
                      </p>
                      <img
                        src="web3.webp"
                        class="card-img-top rounded-0"
                        alt="..."
                      />
                      <p class="card-text mt-2">
                        Saw our dream take shape. The foundation was laid, the
                        framework rose & the interior came together the day
                        arrived when we could proudly say,"It is complete". Our
                        construction project, now stands as a testament to what
                        can be achieved with the right team and a clear vision.
                        This is our story of construction, a journey of
                        challenges, triumphs & the fulfillment of a dream.
                      </p>
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
export default About;
