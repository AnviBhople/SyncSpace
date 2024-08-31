import React from "react";
import googleLogo from "./googleLogo.png";
import { Link } from "react-router-dom";

export default function Acc() {
	const Box = {
		height: "60rem",
		width: "80rem",
		border: "2px solid black",
		backgroundColor: "#e9ecef",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "2rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #94d2bd",
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
	const SignupGoogle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "3rem",
		width: "25rem",
		backgroundColor: "#fff",
		border: "2rem solid #fff",
		fontWeight: "bold",
		fontSize: "large",
		marginLeft: "27rem",
		textDecoartion: "none",
		color: "black",
		boxShadow: "0px 0px 5px #888",
		borderRadius: "3%",
	};
	const Img = {
		height: "2rem",
		width: "2rem",
		marginRight: "1rem",
	};

	const Or = {
		fontWeight: "bold",
		fontSize: "2rem",
		fontFamily: "Arial",
		textAlign: "center",
	};
	const Label = {
		fontWeight: "bold",
		fontSize: "large",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		marginLeft: "20rem",
		color: "#343a40",
	};
	const Input = {
		marginLeft: "20rem",
		height: "3rem",
		width: "25rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
	};
	const Checkbox = {
		height: "1rem",
		width: "1rem",
		paddingRight: "100px",
		marginLeft: "21rem",
	};
	const Submitbtn = {
		cursor: "pointer",
		marginLeft: "31rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};
	const A = {
		textDecoartion: "none",
		color: "#023e8a",
		marginLeft: "34rem",
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
		textDecoartion: "none",
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
				<div className="account-box" style={Box}>
					<h1 style={H1} id="SignUp">
						Create Your Account
					</h1>

					<h5 style={H5}>Welcome! Please enter your details.</h5>

					<br />
					<br />
					<br />

					<Link to="/signupwithgoogle" style={SignupGoogle}>
						<img style={Img} src={googleLogo} alt="Google logo" />
						Sign up with Google
					</Link>

					<br />
					<br />
					<h3 id="or" style={Or}>
						Or
					</h3>
					<br />
					<form>
						<label style={Label} htmlFor="userName">
							Name
						</label>
						<br />
						<input
							style={Input}
							type="text"
							placeholder="Enter your name"
							required
							id="name"
						/>
						<br />
						<br />
						<label style={Label} htmlFor="userEmail">
							Email
						</label>
						<br />
						<input
							type="email"
							id="email"
							placeholder="Enter your Email"
							required
							style={Input}
						/>
						<br />
						<br />
						<label style={Label} htmlFor="password">
							Password
						</label>
						<br />
						<input
							style={Input}
							type="password"
							id="pass"
							placeholder="********"
							required
						/>
						<br />
						<br />
						<label style={Label} htmlFor="confirmPass">
							Confirm Password
						</label>
						<br />
						<input
							style={Input}
							type="password"
							id="confirmPass"
							placeholder="********"
							required
						/>
						<br />
						<br />
						<div className="check">
							<input style={Checkbox} type="checkbox" id="checkbox" required />{" "}
							I accept all the terms and conditions
						</div>
						<br />
						<Link to="/accountcreated">
							<button style={Submitbtn} type="submit" id="submitbtn">
								Sign up
							</button>
						</Link>
					</form>
					<br />
					<div>
						<Link to="/login" style={A} id="loglink">
							Already have an account? Sign in
						</Link>
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
