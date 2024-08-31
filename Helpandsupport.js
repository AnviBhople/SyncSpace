import React from "react";
import { Link } from "react-router-dom";

export default function Helpandsupport() {
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
	const Headhelp = {
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
		fontWeight: "normal",
		fontSize: "x-large",
		textAlign: "center",
		marginLeft: "2rem",
		marginRight: "2rem",
	};

	const linkStyle = {
		fontWeight: "bold",
		textDecoration: "none",
		color: "#1e6091",
	};
	return (
		<>
			<div className="container">
				<div className="settings-box" style={Box}>
					<h1 className="headhelp" style={Headhelp}>
						Help & Support
					</h1>
					<br />
					<br />
					<br />
					<br />
					<p className="parahelp" style={Para}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						suscipit, unde, inventore explicabo porro Link debitis, eveniet
						excepturi quod saepe recusandae. Ea fuga incidunt accusamus, officia
						ad dicta hic aliquam. Beatae soluta voluptates iste nam corrupti
						consequatur dolore culpa nulla qui alias. Quia ipsam nisi aut iusto
						nam voluptas voluptatum praesentium aliquid dolorum delectus, ipsum
						architecto, provident odit aperiam nihil! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Delectus, modi nobis? Quae laborum at
						error? Vero dolore mollitia perferendis ratione. Fugiat tempore
						mollitia iusto cum dolorem at ad, aperiam illo. Pariatur cumque ea
						nam accusamus quaerat aliquid id fugit nisi praesentium, consequatur
						cupiditate sapiente incidunt aliquam consectetur modi, commodi
						possimus deleniti sequi omnis non ullam. Voluptates accusantium ab
						odit minus.
					</p>
					<br />
					<br />
					<p style={Para}>
						Check our{" "}
						<Link to="/" style={linkStyle}>
							{" "}
							terms & settings{" "}
						</Link>{" "}
						for privacy policy and more through your current logged account.
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
