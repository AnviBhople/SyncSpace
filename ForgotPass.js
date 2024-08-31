import React from "react";
import { Link } from "react-router-dom";

function ForgotPass() {
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

	const PStyle = {
		color: "#0d1b2a",
		fontSize: "large",
		marginLeft: "2rem",
		marginRight: "2rem",
		textAlign: "center",
	};

	const IconStyle = {
		height: "4rem",
		fontSize: "xx-large",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
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

	return (
		<>
			<div className="container" style={Box}>
				<div className="box">
					<div className="forgothead">
						<i
							class="fa-solid fa-lock-open fa-14px"
							id="icon"
							style={IconStyle}></i>

						<h1 id="headingpass" style={Head}>
							Forgot Password?
						</h1>
					</div>
					<br />
					<br />
					<br />
					<p style={PStyle}>
						No Problem! Enter your email or username below and we will send you
						an email with instructions to reset your password.
					</p>
					<br />
					<br />
					<br />
					<input
						required
						type="email"
						id="enterEmail"
						placeholder="Enter email here"
						name="email"
						style={Input}
					/>
					<br /> <br />
					<div className="checkBox">
						<input type="checkbox" style={Checkbox} /> I'm not a robot
					</div>
					<br />
					<br />
					<br />
					<div>
						<Link to="/reset" id="resetlink">
							<button type="submit" style={Btn}>
								Send reset link
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
export default ForgotPass;
