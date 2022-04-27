import NavBar from "./header/NavBar";
import NavBarMobile from "./header/NavBarMobile";
import Logo from "./header/Logo";

function Header() {
	return (
		<header className="header_area">
			<div id="header_navbar" className="header_navbar">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<nav className="navbar navbar-expand-lg">
								<Logo />
								<NavBarMobile />
								<NavBar />
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
