import React from "react";
import { Link } from "react-router-dom";

function Login() {
	const Box = {
		height: "42rem",
		width: "50rem",
		border: "2px solid black",
		backgroundColor: "#e9ecef",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "23rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #94d2bd",
	};

	const Head = {
		textAlign: "center",
		fontSize: "1500",
		fontWeight: "bolder",
		color: "#218380",
	};

	const H5 = {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "larger",
		color: "#2a9d8f ",
	};
	const Icon = {
		marginLeft: "24rem",
		fontSize: "3rem",
	};
	const Label = {
		fontWeight: "bold",
		fontSize: "1.2rem",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		marginLeft: "13rem",
		color: "#343a40",
	};
	const Input = {
		marginLeft: "13rem",
		height: "4rem",
		width: "25rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
	};
	const Btn = {
		cursor: "pointer",
		marginLeft: "16rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};
	const Checkbox = {
		height: "1rem",
		width: "1rem",
		paddingRight: "100px",
		marginLeft: "14rem",
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
	const A = {
		textDecoration: "none",
		color: "#023e8a",
		marginLeft: "22rem",
	};

	return (
		<>
			<div className="login-container" style={Box}>
				<div className="containerinLogin">
					<div className="login">
						<br />
						<h1 id="login-head" style={Head}>
							Sign In
						</h1>
						<h5 style={H5}>Welcome back! Please enter your details</h5>
						<br />
					</div>
					<i
						style={Icon}
						id="loginlogo"
						className="fa-solid fa-right-to-bracket"></i>
					<br />
					<form>
						<label style={Label} htmlFor="email" id="emailloglabel">
							Email
						</label>
						<br />
						<input
							style={Input}
							type="email"
							id="emaillogin"
							placeholder="Enter your email here"
							required
						/>
						<br />
						<br />
						<label style={Label} htmlFor="password" id="passloglabel">
							Password
						</label>
						<br />
						<input
							style={Input}
							type="password"
							id="passwordlogin"
							placeholder="********"
							required
						/>
						<br />
						<br />
						<div className="check">
							<input type="checkbox" style={Checkbox} id="checkbox" required />{" "}
							I accept all the terms and conditions
						</div>
						<br />
						<Link to="/accountcreated">
							<button type="submit" style={Btn} id="loginbtn">
								Sign in
							</button>
						</Link>
						<br />
						<Link to="/forgotpassword" style={A}>
							Forgot Password?
						</Link>
					</form>
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

export default Login;
