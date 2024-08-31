import React from "react";
import { Link } from "react-router-dom";
export default function AccountCreated() {
	const Box = {
		height: "20rem",
		width: "50rem",
		border: "2px solid black",
		backgroundColor: "#e9ecef",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "15rem",
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

	const Btn = {
		cursor: "pointer",
		marginLeft: "15rem",
		marginTop: "2rem",
		width: "20rem",
		backgroundColor: "	#008000",
		border: "1rem solid 	#008000",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};
	const Head = {
		textAlign: "center",
		fontSize: "1500",
		fontWeight: "bolder",
		color: "#218380",
	};
	const handleClick = () => {
		const btn = document.getElementById("btn");
		btn.addEventListener("click", () => {
			console.log("Your account has been successfully crerated.");
			alert("Your account has been successfully crerated.");
		});
	};
	return (
		<>
			<div className="container">
				<div className="accCreated-box" style={Box}>
					<br />
					<br />
					<h2 style={Head}>
						Your account has been <br />
						successfully created!
					</h2>
					<br />
					<br />

					<button style={Btn} id="btn" onClick={handleClick}>
						Done
					</button>
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
						<Link
							href="/facebook"
							className="connect-links"
							style={Connectlinks}>
							Facebook
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}
