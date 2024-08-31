import React from "react";
import { Link } from "react-router-dom";
export default function Readinglist() {
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
	const HeadRead = {
		marginTop: "3rem",
		color: "#335c67",
		fontWeight: "bolder",
		fontSize: "70px",
		marginLeft: "1rem",
		textAlign: "center",
	};
	const I = {
		height: "5rem",
		width: "5rem",
		fontWeight: "bolder",
		fontSize: "80px",
		marginLeft: "2rem",
		marginTop: "1rem",
	};
	const Table = {
		width: "50%",
		borderCollapse: "collapse",
		marginLeft: "20rem",
		marginTop: "6rem",
	};

	const TD = {
		border: "1px solid black",
		padding: "10px",
		textAlign: "left",
		width: "8rem",
	};

	const TDHead = {
		border: "1px solid black",
		padding: "10px",
		width: "8rem",
		textAlign: "center",
		fontWeight: "bolder",
		fontSize: "x-large",
		color: "#335c67",
		backgroundColor: "#e9ecef",
	};
	const Input = {
		backgroundColor: "#e9ecef",
		width: "100%",
		color: "#335c67",
		boxWidth: "0",
		fontWeight: "bold",
		fontFamily: "Arial",
		fontSize: "larger",
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
				<div className="readinglist-box" style={Box}>
					<h1 className="headread" style={HeadRead}>
						Reading List
						<i style={I} className="fa-solid fa-book-open-reader"></i>
					</h1>
					<table style={Table}>
						<tr>
							<td style={TDHead}>Name</td>
							<td style={TDHead}>Type</td>
							<td style={TDHead}>Progress</td>
							<td style={TDHead}>Resource</td>
							<td style={TDHead}>Author</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text " style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
						<tr>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
							<td style={TD}>
								<input type="text link" style={Input} />
							</td>
							<td style={TD}>
								<input type="text" style={Input} />
							</td>
						</tr>
					</table>
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
