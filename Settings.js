import React from "react";
import Account from "./Account";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import { Routes, Route, Link } from "react-router-dom";

function Set() {
	const Box = {
		height: "48rem",
		width: "80rem",
		border: "2px solid black",
		backgroundColor: "#e9ecef",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "2rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #94d2bd",
	};
	const HeadSet = {
		marginTop: "3rem",
		color: "#335c67",
		fontWeight: "bolder",
		fontSize: "70px",
		marginLeft: "1rem",
		textAlign: "center",
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
	const Para = {
		fontWeight: "bold",
		fontSize: "x-large",
		textAlign: "center",
	};
	const TaskText = {
		backgroundColor: "#e9ecef",
		color: "#335c67",
		fontWeight: "bold",
		fontSize: "larger",
		border: "1px solid #e9ecef",
	};
	const Checkbox = {
		height: "2rem",
		width: "2rem",
		marginLeft: "4rem",
	};
	return (
		<>
			<div className="container">
				<div className="settings-box" style={Box}>
					<h1 className="sethead " style={HeadSet}>
						Settings
						<i className="fa-solid fa-gear"></i>
					</h1>
					<div className="settings-list">
						<div className="set1">
							<input
								className="setinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox1"
							/>
							<p style={Para}>Notifications</p>
						</div>
						<br />
						<div className="set2">
							<input
								className="setinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox2"
							/>
							<p style={Para}>Sound On</p>
						</div>
						<br />
						<div className="set3">
							<i className="fa-solid fa-language"></i>
							<p style={Para}>Language</p>
						</div>
						<br />
						<div className="set4">
							<i className="fa-solid fa-globe"></i>
							<p>Region</p>
						</div>
						<br />
						<div className="set5">
							<Link to="/account">Account Settings</Link>
						</div>
						<br />
						<div className="task6">
							<input
								className="setinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox6"
							/>
							<input
								style={TaskText}
								type="text"
								placeholder="    ..."
								id="task6text"
							/>
						</div>
						<br />
						<div className="task7">
							<input
								className="setinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox7"
							/>
							<input
								type="text"
								style={TaskText}
								placeholder="    ..."
								id="task7text"
							/>
						</div>
						<br />
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

export default function Settings() {
	return (
		<Routes>
			<Route path="/settings" element={<Set />} />
			<Route path="/account" element={<Account />} />
			<Route path="/instagram" element={<Instagram />} />
			<Route path="/twitter" element={<Twitter />} />
			<Route path="/facebook" element={<Facebook />} />
		</Routes>
	);
}
