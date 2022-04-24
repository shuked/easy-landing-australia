import ctaRightImg from '../assets/images/cta-right-img.svg'

function Download() {
    return (
        <section id="download" className="download-area pt-150">
        <div className="container">
          <div className="download-wrapper bg_cover">
            <div className="row">
              <div className="col-xl-6 col-lg-6 offset-1 col-11">
                <div className="download-content">
                  <div className="section-title">
                    <h2
                      className="mb-30 text-white wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      Download the app now
                    </h2>
                    <p
                      className="mb-40 text-white wow fadeInUp"
                      data-wow-delay=".35s"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diamnonumy eirmod tempor invidunt labore.
                    </p>
                  </div>
                  <div className="download-btns">
                    <a
                      href="#"
                      className="btn-hover download-btn me-4 wow fadeInUp"
                      data-wow-delay=".45s"
                    >
                      <span className="icon gradient-2">
                        <i className="lni lni-apple"> </i>
                      </span>
                      <span className="text">App Store <b>Download now</b> </span>
                    </a>
                    <a
                      href="#"
                      className="btn-hover download-btn wow fadeInUp"
                      data-wow-delay=".55s"
                    >
                      <span className="icon gradient-1">
                        <i className="lni lni-play-store"> </i>
                      </span>
                      <span className="text">Play Store <b>Download now</b> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="
                  col-xl-5
                  align-self-end
                  col-lg-5 col-11
                  offset-1 offset-lg-0
                "
              >
                <div className="download-img wow fadeInRight" data-wow-delay=".2s">
                  <img src={ctaRightImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Download