import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

function Twitter() {
	const styles = {
		box: {
			height: "48rem",
			width: "50rem",
			border: "2px solid black",
			backgroundColor: "#fff",
			margin: "5rem 15rem",
			boxShadow: "10px 10px #caf0f8",
		},
		img: {
			height: "17rem",
			width: "23rem",
			objectFit: "contain",
			margin: "2rem 0 0 1rem",
		},
		para1: {
			marginLeft: "5rem",
			color: "#adb5bd",
			fontSize: "large",
		},
		back: {
			height: "10rem",
			backgroundColor: "#a2d2ff",
		},
		des: {
			fontSize: "larger",
			fontWeight: "normal",
			color: "#343a40",
			margin: "0 2rem",
		},
		fav: {
			marginLeft: "2rem",
			color: "#6c757d",
		},
		btn: {
			height: "4rem",
			width: "11rem",
			backgroundColor: "#00a6fb",
			color: "#fff",
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "larger",
			border: "2px solid #00a6fb",
			borderRadius: "5%",
			marginLeft: "2rem",
		},
		footer: {
			height: "14rem",
			backgroundColor: "#0d1b2a",
		},
		footerContent: {
			color: "#6c757d",
			textAlign: "center",
			paddingTop: "5rem",
			marginLeft: "13rem",
		},
		async: {
			textDecoration: "none",
			color: "white",
		},
		connect: {
			marginLeft: "6rem",
			paddingBottom: "3rem",
		},
		paraConnect: {
			fontSize: "larger",
		},
		connectLinks: {
			textDecoration: "none",
			color: "#adb5bd",
			fontSize: "x-large",
			fontWeight: "bold",
		},
		para: {
			fontWeight: "bold",
			fontSize: "x-large",
			textAlign: "center",
		},
	};

	return (
		<>
			<div className="container">
				<div className="twitter-box" style={styles.box}>
					<div className="background" style={styles.back}>
						<Link to="/">
							<img src={Logo} alt="Logo" style={styles.img} />
						</Link>
						<p style={styles.para1}>@SyncSpace</p>
						<br />
						<br />
						<p style={styles.des}>
							SyncSpace empowers the world to manage time and space through a
							creative workspace.
						</p>
						<p style={styles.fav}>
							<i className="fa-solid fa-briefcase"></i>&ensp;Software
							Company&ensp;
							<i className="fa-solid fa-thumbtack"></i>&ensp;New York, NY&ensp;
							<br />
							<i className="fa-solid fa-calendar-days"></i>&ensp;Joined June
							2005
						</p>
						<br />
						<br />
						<p style={styles.des}>239 Following &ensp; 250.5K Followers</p>
						<br />
						<Link to="/app">
							<button style={styles.btn}>Go to App</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="footer">
				<footer style={styles.footer}>
					<h3 className="footer-content" style={styles.footerContent}>
						With ❤️ from team{" "}
						<Link to="/" className="async" style={styles.async}>
							SyncSpace
						</Link>
					</h3>
					<div className="connect" style={styles.connect}>
						<p className="para-connect" style={styles.paraConnect}>
							Connect with us
						</p>
						<Link
							to="/twitter"
							className="connect-links"
							style={styles.connectLinks}>
							Twitter&ensp;
						</Link>
						<Link
							to="/instagram"
							className="connect-links"
							style={styles.connectLinks}>
							Instagram&ensp;
						</Link>
						<Link
							to="/facebook"
							className="connect-links"
							style={styles.connectLinks}>
							Facebook
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}

export default Twitter;
