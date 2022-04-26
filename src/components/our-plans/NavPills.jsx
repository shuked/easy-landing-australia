

function NavPills() {
    return (
        <ul
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
              </ul>
    )
  }
  
  export default NavPills