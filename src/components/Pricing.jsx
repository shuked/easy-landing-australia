
function Pricing() {
    return (
        <section id="pricing" className="pricing-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="section-title text-center">
              <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                Our Plans
              </h2>
              <p className="mb-50 wow fadeInUp" data-wow-delay=".4s">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt labore.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="pricing-nav">
              {/* <ul
                className="
                  nav nav-pills
                  justify-content-center
                  align-items-center
                  mb-50
                  wow
                  fadeInUp
                "
                data-wow-delay=".2s"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-month-tab"
                    data-bs-toggle="pill"
                    href="#pills-month"
                    role="tab"
                    aria-controls="pills-month"
                    aria-selected="true"
                    >Monthly</a
                  >
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-year-tab"
                    data-bs-toggle="pill"
                    href="#pills-year"
                    role="tab"
                    aria-controls="pills-year"
                    aria-selected="false"
                    >Yearly</a
                  >
                </li>
              </ul> */}
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade price-tab show active"
                  id="pills-month"
                  role="tabpanel"
                  aria-labelledby="pills-month-tab"
                >
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-price text-center">
                        <div className="price-icon icon-style mx-auto gradient-1">
                          <i className="lni lni-user"> </i>
                        </div>
                        <h4 className="package-name mb-20">ויזה חופשה ועבודה</h4>
                        <h4 className="package-price mb-20">199₪</h4>
                        <ul className="package-details">
                          <li>איסוף מסמכים</li>
                          <li>תרגום</li>
                          <li>הגשת הבקשה</li>
                          
                        </ul>
                        <a
                          href="#"
                          className="btn-hover price-btn main-btn"
                          >Buy Now</a>
                        
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-price text-center">
                        <div className="price-icon icon-style mx-auto gradient-3">
                          <i className="lni lni-diamond"> </i>
                        </div>
                        <h4 className="package-name mb-20">תהליך ליווי לאוסטרליה</h4>
                        <h4 className="package-price mb-20">999₪</h4>
                        <ul className="package-details">
                          <li>הוצאת ויזה</li>
                          <li>מציאת טיסות וביטוח</li>
                          <li>ליווי בפתיחת חשבון</li>
                          <li>ליווי בקניית רכב</li>
                          <li>ליווי ברכישת חבילת סלולר</li>
                          <li>כתיבת קו"ח</li>
                          <li>כרטיסי עבודה</li>
                          <li>עזרה במציאת עבודה</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-hover price-btn main-btn"
                          >Buy Now</a
                        >
                        
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-price text-center active">
                        <div className="price-icon icon-style mx-auto gradient-2">
                          <i className="lni lni-users"> </i>
                        </div>
                        <h4 className="package-name mb-20">החזר מיסים</h4>
                        <h4 className="package-price mb-20">299₪</h4>
                        <ul className="package-details">
                          <li>איסוף תלושי שכר</li>
                          <li>איסוף הוצאות מוכרות המ"ס</li>
                          <li>הגשת הטפסים לרשויות המ"ס</li>
                          
                        </ul>
                        <a
                          href="#"
                          className="btn-hover price-btn main-btn"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div
                  className="tab-pane fade price-tab"
                  id="pills-year"
                  role="tabpanel"
                  aria-labelledby="pills-year-tab"
                >
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-price text-center">
                        <div className="price-icon icon-style mx-auto gradient-1">
                          <i className="lni lni-user"> </i>
                        </div>
                        <h4 className="package-name mb-20">Personal</h4>
                        <h4 className="package-price mb-20">$25.00</h4>
                        <ul className="package-details">
                          <li>5 Cards</li>
                          <li>50GB Disk Space</li>
                          <li>50GB Monthly Bandwidth</li>
                          <li>10 Subdomains</li>
                          <li>15 Domains</li>
                          <li>Unlimited Support</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-hover price-btn main-btn"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-price text-center active">
                        <div className="price-icon icon-style mx-auto gradient-2">
                          <i className="lni lni-users"> </i>
                        </div>
                        <h4 className="package-name mb-20">Standard</h4>
                        <h4 className="package-price mb-20">$50.00</h4>
                        <ul className="package-details">
                          <li>15 Cards</li>
                          <li>90GB Disk Space</li>
                          <li>70GB Monthly Bandwidth</li>
                          <li>20 Subdomains</li>
                          <li>25 Domains</li>
                          <li>Unlimited Support</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-hover price-btn main-btn"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-price text-center">
                        <div className="price-icon icon-style mx-auto gradient-3">
                          <i className="lni lni-diamond"> </i>
                        </div>
                        <h4 className="package-name mb-20">Premium</h4>
                        <h4 className="package-price mb-20">$125.00</h4>
                        <ul className="package-details">
                          <li>Unlimited Cards</li>
                          <li>100GB Disk Space</li>
                          <li>100GB Monthly Bandwidth</li>
                          <li>50 Subdomains</li>
                          <li>75 Domains</li>
                          <li>Unlimited Support</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-hover price-btn main-btn"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  
  export default Pricing