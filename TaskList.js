import React from "react";
import { Link } from "react-router-dom";
export default function TaskList() {
	const Container = {
		height: "45rem",
		width: "80rem",
		border: "2px solid black",
		backgroundColor: "#e9ecef",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "10rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #94d2bd",
	};
	const HeadStyle = {
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		fontWeight: "bolder",
		fontSize: "4rem",
		color: "#335c67",
		textAlign: "center",
		marginTop: "2rem",
		marginLeft: "18rem",
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
	const Todo = {
		height: "4rem",
		width: "4rem",
		marginLeft: "20rem",
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
			<div className="container" style={Container}>
				<div className="tasklist-box">
					<h1 className="todohead" style={HeadStyle}>
						To-do list<i style={Todo} className="fa-solid fa-list-check"></i>
					</h1>

					<br />
					<br />
					<br />
					<br />
					<div className="task-list">
						<div className="task1">
							<input
								className="texttaskinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox1"
							/>
							<input
								type="text"
								style={TaskText}
								placeholder="    ..."
								id="task1text"
							/>
						</div>
						<br />

						<div className="task2">
							<input
								className="texttaskinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox2"
							/>
							<input
								type="text"
								style={TaskText}
								placeholder="    ..."
								id="task2text"
							/>
						</div>
						<br />
						<div className="task3">
							<input
								className="texttaskinput"
								type="checkbox"
								style={Checkbox}
								id="checkbox3"
							/>
							<input
								type="text"
								style={TaskText}
								placeholder="    ..."
								id="task3text"
							/>
						</div>
						<br />
						<div className="task4">
							<input
								className="texttaskinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox4"
							/>
							<input
								type="text"
								style={TaskText}
								placeholder="    ..."
								id="task4text"
							/>
						</div>
						<br />
						<div className="task5">
							<input
								className="texttaskinput"
								style={Checkbox}
								type="checkbox"
								id="checkbox5"
							/>
							<input
								style={TaskText}
								type="text"
								placeholder="    ..."
								id="task5text"
							/>
						</div>
						<br />
						<div className="task6">
							<input
								className="texttaskinput"
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
								className="texttaskinput"
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
						<Link to="/twitter" style={Connectlinks} className="connect-links">
							Twitter&ensp;
						</Link>
						<Link
							to="/instagram"
							style={Connectlinks}
							className="connect-links">
							Instagram&ensp;
						</Link>
						<Link to="/facebook" style={Connectlinks} className="connect-links">
							Facebook
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}
