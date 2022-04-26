import LogoImg from "../../assets/images/logo.svg";


function Logo() {
	return (
		<a className="navbar-brand" href="index.html">
			<img id="logo" src={LogoImg} alt="Logo" />
		</a>
	);
}

export default Logo;
