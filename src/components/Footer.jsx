

function Footer() {
    return (
      <footer id="footer" className="footer-area bg_cover">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
              <a href="#" className="mb-35 d-block footer-logo">
                <img src="assets/images/logo.svg" alt="" />
              </a>
              <p className="mb-35">
                Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <ul className="social-links">
                <li>
                  <a href="#" className="facebook">
                    <i className="lni lni-facebook-filled"> </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="lni lni-twitter-filled"> </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="lni lni-instagram-filled"> </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="lni lni-linkedin-original"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Feature</a></li>
                <li><a href="#">How it Work</a></li>
                <li><a href="#">Screenshots</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".6s">
              <h4>Product Help</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Team</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".8s">
              <h4>Subscribe Newsletter</h4>
              <form
                action="#"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
                className="subscribe-form validate"
              >
                <input
                  type="email"
                  name="EMAIL"
                  id="EMAIL"
                  className="required email"
                  placeholder="Enter Mail Address"
                />

                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{display: "none"}}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{display: "none"}}
                  ></div>
                </div>
                <div
                  style={{position: "absolute", left: "-5000px"}}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_4dbefd9d3a1d6a570020b1e85_e16d098ae8"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <button
                  id="subscribe"
                  className="btn-hover main-btn text-end"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-cradit">
          <p className="text-center mb-0">
            Designed and Developed by
            <a href="https://uideck.com" rel="nofollow">UIdeck</a>
          </p>
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer