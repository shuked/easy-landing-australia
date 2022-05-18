import LogoImg from "../../../assets/images/logo.svg";


function PlanVisa() {
	return (
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
	);
}

export default PlanVisa;
