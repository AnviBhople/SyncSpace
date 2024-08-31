import React from "react";
import { Link } from "react-router-dom";

function Signup_Google() {
	const Box = {
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
	const H1 = {
		color: "#218380",
		fontWeight: "bolder",
		fontSize: "1500",
		textAlign: "center",
		marginTop: "2rem",
	};
	const H5 = {
		color: "#2a9d8f",
		fontWeight: "bold",
		textAlign: "center",
	};
	const Label = {
		fontWeight: "bold",
		fontSize: "1.2rem",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		marginLeft: "20rem",
		color: "#343a40",
	};
	const Input = {
		marginLeft: "20rem",
		height: "4rem",
		width: "25rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
	};

	const Para = {
		fontFamily: "Arial",
		color: "#2a9d8f",
		fontSize: "large",
		marginLeft: "20rem",
		textWrap: "balance",
	};
	const Btn = {
		cursor: "pointer",
		marginLeft: "31rem",
		width: "20rem",
		backgroundColor: "#4BB543",
		border: "1rem solid #4BB543",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};

	return (
		<>
			<div className="container">
				<div className="signupwithgoogle-box" style={Box}>
					<div className="Google-conatiner">
						<div className="box">
							<h1 className="google-head" style={H1}>
								Sign Up
							</h1>
						</div>
						<h4 style={H5}>Continue with Google</h4>
						<br />
						<br />
						<br />
						<br />
						<div className="input-conatiner">
							<label style={Label} htmlFor="emailOrPhone">
								Email or phone
							</label>
							<br />
							<input
								style={Input}
								type="text"
								id="emailOrPhone"
								name="emailOrPhone"
							/>
						</div>

						<br />
						<br />
						<br />
						<p style={Para}>
							To continue, Google will share your name, email address, language
							preference and profile picture. Before using, you can check their
							privacy policy through their official website.
						</p>
						<br />
						<br />
						<Link to="/next">
							<button style={Btn} className="button" id="nextbtn">
								Next
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

export default Signup_Google;
