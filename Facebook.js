import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function Facebook() {
	const Box = {
		height: "48rem",
		width: "50rem",
		border: "2px solid black",
		backgroundColor: "#fff",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "25rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #788bff",
	};
	const Para = {
		fontWeight: "bold",
		fontSize: "x-large",
		textAlign: "left",
		marginLeft: "2rem",
	};

	const Img = {
		height: "17rem",
		width: "23rem",
		objectFit: "contain",
		marginLeft: "1rem",
		marginTop: "2rem",
	};
	const Back = {
		height: "10rem",
		backgroundColor: "#4361ee",
	};
	const Des = {
		fontSize: "larger",
		fontWeight: "normal",
		color: "#343a40",
		marginLeft: "2rem",
		marginRight: "2rem",
	};
	const Fav = {
		marginLeft: "2rem",
		color: "#6c757d",
	};
	const Btn = {
		height: "4rem",
		width: "11rem",
		backgroundColor: "#4361ee",
		color: "#fff",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "larger",
		border: "2px solid #4361ee",
		borderRadius: "5%",
		marginLeft: "2rem",
	};
	const Footer = {
		height: "14rem",
		backgroundColor: "#0d1b2a",
	};
	const Footercontent = {
		color: "#6c757d",
		textAlign: "center",
		paddingTop: "5rem",
		marginLeft: "13rem",
	};
	const Async = {
		textDecoration: "none",
		color: "white",
	};
	const Connect = {
		marginLeft: "6rem",
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
			<div className="container">
				<div className="facebook-box" style={Box}>
					<div className="background" style={Back}>
						<a href="/">
							<img src={Logo} alt="Logo" style={Img} />
						</a>
						<div className="text">
							<p style={Para}>theSyncSpace</p>
							<p style={Des}>
								SyncSpace empowers the world to manage time and space through a
								creative workspace.
							</p>
							<br />
							<p style={Fav}>
								<i className="fa-solid fa-briefcase"></i>&ensp;Software
								Company&ensp;
								<i className="fa-solid fa-thumbtack"></i>&ensp;New York,
								NY&ensp;
								<br />
								<i className="fa-solid fa-calendar-days"></i>&ensp;Joined June
								2005
							</p>
							<br />
							<br />
							<p style={Des}>
								123 Posts &ensp; 239 Following &ensp; 250.5K Followers
							</p>
							<br />
							<a href="/">
								<button style={Btn}>Go to App</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer">
				<footer style={Footer}>
					<h3 className="footer-content" style={Footercontent}>
						With ❤️ from team{" "}
						<a href="/" className="async" style={Async}>
							SyncSpace
						</a>
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

export default Facebook;
