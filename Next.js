import React from "react";
import googleLogo from "./googleLogo.png";
import { Link } from "react-router-dom";
function Next() {
	const NextStyle = {
		boxSizing: "border-box",
		backgroundColor: "#fefeff",
		height: "40rem",
		width: "30rem",
		display: "flex",
		flexDecoration: "column",
		justifyContent: "center",
		alignItems: "center",
		border: "2px solid #ccc9dc",
		borderRdius: "10%",
		// border: "radius top 20%",
		marginBottom: "10rem",
		marginTop: "2rem",
		boxShadow: "20px 20px 20px black",
		marginLeft: "35rem",
	};

	const GoogleLogoStyle = {
		height: "6rem",
		width: "6rem",
		marginLeft: "11rem",
	};

	const ParaStyle = {
		color: "#0d1b2a",
		fontSize: "large",
		marginLeft: "2rem",
		marginRight: "2rem",
		TextAlign: "center",
	};

	const BtnStyle = {
		cursor: "pointer",
		marginLeft: "4rem",
		marginRight: "2rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid#1e96fc",
		borderRdius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};

	const handleClick = () => {
		const btnid = document.getElementById("submitbtn");
		btnid.addEventListener("click", () => {
			console.log("New account has been successfully created.");
			alert("Your account has been successfully created.");
		});
	};

	const IconStyle = {
		height: "6rem",
		fontWeight: "bolder",
		fontSize: "xx-large",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	const H4Style = {
		fontWeight: "bold",
		fontSize: "x-large",
		color: "#0d1b2a",
		textAlign: "center",
	};
	const Footer = {
		height: "14rem",

		backgroundColor: "#0d1b2a",
	};
	const Footercontent = {
		color: "#6c757d",
		TextAlign: "center",
		paddingTop: "5rem",
		marginLeft: "13rem",
	};
	const Async = {
		textDecoration: "none",
		color: "white",
	};
	const Connect = {
		marginLeft: " 6rem",
		paddingBottom: "3rem",
	};
	const Paraconnect = {
		fontSize: "larger",
	};
	const Connectlinks = {
		textDecoration: "none",
		color: "#adb5bd",
		fontSize: "x-large",
		fontWeight: "bold",
	};
	return (
		<>
			<div className="container" style={NextStyle}>
				<div className="box">
					<img
						src={googleLogo}
						id="googlelogo"
						style={GoogleLogoStyle}
						alt="GoogleLogo"></img>
					<br />
					<br />
					<h4 style={H4Style}>Continuing with Google</h4>
					<i
						className="fa-solid fa-user fa-14px"
						id="icon"
						style={IconStyle}></i>
					<p id="paranext" style={ParaStyle}>
						Signning with your currently active Google account.By this you have
						accepted all the terms and conditions. If you wish Link check them,
						you can kindly visit the Google terms and conditions.
					</p>
					<br />
					<div>
						<Link Link="/accountcreated">
							<button
								type="submit"
								id="submitbtn"
								style={BtnStyle}
								onClick={handleClick}>
								Sign up
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="footer">
				<footer style={Footer}>
					<h3 className="footer-content" style={Footercontent}>
						With ❤️ from team{" "}
						<Link to="/" className="async" style={Async}>
							SyncSpace
						</Link>
					</h3>
					<div className="connect" style={Connect}>
						<p className="para-connect" style={Paraconnect}>
							Connect with us
						</p>
						<Link to="/twitter" className="connect-links" style={Connectlinks}>
							Twitter&ensp;
						</Link>
						<Link
							to="/instagram"
							className="connect-links"
							style={Connectlinks}>
							Instagram&ensp;
						</Link>
						<Link to="/facebook" className="connect-links" style={Connectlinks}>
							Facebook
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}

export default Next;
