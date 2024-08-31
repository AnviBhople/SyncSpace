import React from "react";
import { Link } from "react-router-dom";
export default function Inbox() {
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
	const HeadInbox = {
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

	const Para = {
		fontWeight: "bold",
		fontSize: "x-large",
		textAlign: "center",
	};

	return (
		<>
			<div className="container">
				<div className="inbox-box" style={Box}>
					<h1 style={HeadInbox} className="inboxhead">
						Inbox
					</h1>

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<p style={Para}>
						You have no messages as of now. <br />
						You will be notified upon the arrival of new messages!
					</p>
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
