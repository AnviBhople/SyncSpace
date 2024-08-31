import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function About() {
	const Aboutbox = {
		height: "40rem",
		width: "80rem",
		border: "2px solid black",
		backgroundColor: "#e9ecef",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "2rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #94d2bd",
	};

	const HeadAbout = {
		marginTop: "3rem",
		color: "#335c67",
		fontWeight: "bolder",
		fontSize: "50px",
		marginLeft: "1rem",
		textAlign: "center",
	};

	const Content = {
		textAlign: "center",
		justifyContent: "center",
		color: "#2f3e46",
		fontWeight: "bold",
		fontSize: "large",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		paddingLeft: "2rem",
	};
	const Img = {
		height: "10rem",
		objectFit: "contain",
		marginLeft: "34rem",
		marginTop: "2rem",
		border: "2px solid #2f3e46",
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
			<div className="container">
				<div className="about-box" style={Aboutbox}>
					<img src={Logo} alt="LOGO" style={Img} />
					<h1 className="head-about" style={HeadAbout}>
						About SyncSpace
					</h1>
					<br />
					<br />
					<div className="content" style={Content}>
						Welcome to SyncSpace – your ultimate digital workspace! At
						SyncSpace, we believe in the power of seamless collaboration and
						efficient organization. Our mission is to provide a versatile
						platform that transforms the way you manage projects, take notes,
						and collaborate with your team. Inspired by the dynamic needs of
						modern workflows, SyncSpace combines powerful features with a
						user-friendly interface, ensuring you can capture ideas, structure
						tasks, and stay on top of your goals effortlessly. Whether you're a
						solo entrepreneur, a growing startup, or a large enterprise,
						SyncSpace adapts to your needs, offering customizable solutions that
						scale with you. Our team is dedicated to continuous improvement,
						driven by your feedback and the ever-evolving landscape of
						productivity tools. We are committed to delivering a product that
						not only meets your expectations but exceeds them, helping you
						achieve more every day. Join us on this journey to redefine
						productivity. Welcome to SyncSpace – where your ideas find their
						perfect space to grow. It is an online and open workspace for
						everyone. The everyday tasks, business presentations, taking notes
						and other tasks can be managed well.
					</div>
				</div>
			</div>
			<div className="footer">
				<footer style={Footer}>
					<h3 className="footer-content" style={Footercontent}>
						With ❤️ from team{" "}
						<Link href="/" className="async" style={Async}>
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

export default About;
