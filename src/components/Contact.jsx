

function Contact() {
    return (
        <section id="contact" className="contact-area pt-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10 mx-auto">
            <div className="section-title text-center">
              <h2 className="mb-60 wow fadeInUp" data-wow-delay=".2s">
                What Questions Do Our Customers Ask Most Often?
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="faq-wrapper">
              <h3 className="mb-40 wow fadeInUp" data-wow-delay=".2s">
                Frequently Asked Questions
              </h3>
              <div className="faq-accordion accordion-style">
                <div className="accordion" id="accordionExample2">
                  <div
                    className="single-accordion mb-30 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="accordion-btn">
                      <button
                        className="btn-block text-start collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="true"
                        aria-controls="collapse4"
                      >
                        <span>What should I include in App?</span>
                      </button>
                    </div>

                    <div
                      id="collapse4"
                      className="collapse"
                      aria-labelledby="heading4"
                      data-parent="#accordionExample2"
                    >
                      <div className="accordion-content">
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-accordion mb-30 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="accordion-btn">
                      <button
                        className="btn-block text-start collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-expanded="true"
                        aria-controls="collapse5"
                      >
                        <span>How does the Mobile app work?</span>
                      </button>
                    </div>

                    <div
                      id="collapse5"
                      className="collapse"
                      aria-labelledby="heading5"
                      data-parent="#accordionExample2"
                    >
                      <div className="accordion-content">
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-accordion mb-30 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="accordion-btn">
                      <button
                        className="btn-block text-start collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-expanded="true"
                        aria-controls="collapse6"
                      >
                        <span>Does disabling apps free up space?</span>
                      </button>
                    </div>

                    <div
                      id="collapse6"
                      className="collapse"
                      aria-labelledby="heading6"
                      data-parent="#accordionExample2"
                    >
                      <div className="accordion-content">
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-accordion mb-30 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="accordion-btn">
                      <button
                        className="btn-block text-start collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse7"
                        aria-expanded="true"
                        aria-controls="collapse7"
                      >
                        <span>Can users choose to install the app?</span>
                      </button>
                    </div>

                    <div
                      id="collapse7"
                      className="collapse"
                      aria-labelledby="heading7"
                      data-parent="#accordionExample2"
                    >
                      <div className="accordion-content">
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-form-wrapper">
              <h3 className="mb-40 wow fadeInUp" data-wow-delay=".3s">
                Do You Have Any Question?
              </h3>
              <form
                action="assets/contact.php"
                method="post"
                className="contact-form wow fadeInUp"
                data-wow-delay=".4s"
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
                <button className="btn-hover btn-block main-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  
  export default Contact