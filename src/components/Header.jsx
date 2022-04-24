import Logo from '../assets/images/logo.svg'

function Header() {
    return (
        <header className="header_area">
        <div id="header_navbar" className="header_navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img id="logo" src={Logo} alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"> </span>
                    <span className="toggler-icon"> </span>
                    <span className="toggler-icon"> </span>
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="page-scroll active" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#how-work">Our Project</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#pricing">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">VISA</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#download">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  
                </nav>
               
              </div>
            </div>
           
          </div>
          
        </div>
       
      </header>
    )
  }
  
  export default Header