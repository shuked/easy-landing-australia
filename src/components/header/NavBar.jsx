function NavBar() {
	return (
		<div
			className="collapse navbar-collapse sub-menu-bar"
			id="navbarSupportedContent"
		>
			<ul id="nav" className="navbar-nav ms-auto">
				<li className="nav-item">
					<a className="page-scroll active" href="#home">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="page-scroll" href="#how-work">
						Our Project
					</a>
				</li>
				<li className="nav-item">
					<a className="page-scroll" href="#pricing">
						Pricing
					</a>
				</li>
				<li className="nav-item">
					<a className="page-scroll" href="#contact">
						VISA
					</a>
				</li>
				<li className="nav-item">
					<a className="page-scroll" href="#download">
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
