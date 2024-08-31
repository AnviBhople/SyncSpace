import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function Instagram() {
	const Box = {
		height: "48rem",
		width: "50rem",
		border: "2px solid black",
		backgroundColor: "#fff",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "25rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #ffb3c6",
	};
	const Des = {
		fontSize: "larger",
		fontWeight: "normal",
		color: "#343a40",
		marginLeft: "2rem",
		marginRight: "2rem",
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
		backgroundColor: "#ff8fab",
	};
	const Fav = {
		marginLeft: "2rem",
		color: "#6c757d",
	};
	const Btn = {
		height: "4rem",
		width: "11rem",
		backgroundColor: "#ff758f",
		color: "#fff",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "larger",
		border: "2px solid #ff758f",
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
				<div className="insta-box" style={Box}>
					<div className="background" style={Back}>
						<Link to="/">
							<img src={Logo} alt="logo" style={Img} />
						</Link>
						<div className="text">
							<p style={Para}>theSyncSpace</p>
							<p style={Des}>
								SyncSpace empowers the world to manage time and space through
								Link creative workspace.
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
							<Link to="/">
								<button style={Btn}>Go to App</button>
							</Link>
						</div>
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

export default Instagram;
