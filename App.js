import React from "react";
import "./App.css";
import Logo from "./components/Logo.png";
import ToDoimg from "./components/ToDoimg.png";
import journal from "./components/journal.png";
import reading from "./components/reading.png";
import personalspace from "./components/personalspace.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "./components/Account";
import About from "./components/About";
import TaskList from "./components/TaskList";
import Journal from "./components/Journal";
import ReadingList from "./components/ReadingList";
import PersonalSpace from "./components/PersonalSpace";
import Inbox from "./components/Inbox";
import Settings from "./components/Settings";
import Helpandsupport from "./components/Helpandsupport";
import Twitter from "./components/Twitter";
import Instagram from "./components/Instagram";
import Facebook from "./components/Facebook";
import SignupGoogle from "./components/SignupGoogle";
import Next from "./components/Next";

function SyncSpace() {
	const Imargin = {
		marginRight: "0.5rem",
	};
	return (
		<>
			<div className="side-navbar">
				<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-vertical">
					<div className="container-fluid flex-column">
						<a className="navbar-brand" href="/">
							<img src={Logo} alt="SynSpace-logo" className="logoimg" />
							<br />
							<br />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav mb-2 mb-lg-0">
								<li className="nav-item">
									<Link
										to="/account"
										className="nav-link active"
										aria-current="page">
										<i style={Imargin} className="fa-solid fa-user"></i> Account
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/">
										<i style={Imargin} className="fa-solid fa-house"></i> Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">
										About us
									</Link>
								</li>
								<br />
								<br />
								<li className="nav-item">
									<Link to="/tasklist" className="nav-link">
										<i
											style={Imargin}
											className="fa-sharp fa-solid fa-scissors"></i>
										Task list
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/readinglist">
										<i style={Imargin} className="fa-solid fa-book"></i>Reading
										list
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/journal">
										<i style={Imargin} className="fa-solid fa-book-open"></i>
										Journal
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/personalspace">
										<i style={Imargin} className="fa-solid fa-user"></i>Personal
										Space
									</Link>
								</li>
								<br />
								<br />
								<br />
								<li className="nav-item">
									<Link className="nav-link" to="/inbox">
										<i style={Imargin} className="fa-solid fa-inbox"></i>Inbox
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/settings">
										<i style={Imargin} className="fa-solid fa-gear"></i>Settings
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/helpandsupport">
										<i
											style={Imargin}
											className="fa-regular fa-circle-question"></i>
										Help & Support
									</Link>
								</li>
								<br />
								<br />
								<br />
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div className="main-content">
				<br />
				<h1 className="welcome">Welcome to SyncSpace</h1>
				<br />
				<br />
				<br />
				<div className="row">
					<div className="col-md-3">
						<div className="card" style={{ width: "18rem" }} id="taskcard">
							<img src={ToDoimg} className="card-img-top" alt="To-Do-List" />
							<br />
							<div className="card-body">
								<h5 className="card-title">
									<i
										style={Imargin}
										className="fa-sharp fa-solid fa-scissors"></i>
									Task list
								</h5>
								<p>
									Use this template to track your personal tasks. Have your
									important tasks for the day.
								</p>
								<br />
								<Link to="/tasklist" className="btn btn-success">
									Open
								</Link>
							</div>
						</div>
						<br />
						<br />
						<div className="card" style={{ width: "18rem" }} id="readingcard">
							<img src={reading} className="card-img-top" alt="Reading" />
							<br />
							<div className="card-body">
								<h5 className="card-title">
									<i style={Imargin} className="fa-solid fa-book"></i>Reading
									list
								</h5>
								<p className="card-text">
									The modern day reading list includes more than just books.
									We've created a dashboard to help you track your to be read.
								</p>
								<br />
								<Link to="/readinglist" className="btn btn-success">
									Open
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card" style={{ width: "18rem" }} id="journalcard">
							<img src={journal} className="card-img-top" alt="Journal" />
							<br />
							<div className="card-body">
								<h5 className="card-title">
									<i style={Imargin} className="fa-solid fa-book-open"></i>
									Journal
								</h5>
								<p className="card-text">
									Document your life - daily happenings, special occasions, and
									reflections on your goals.
								</p>
								<br />
								<Link to="/journal" className="btn btn-success">
									Open
								</Link>
							</div>
						</div>
						<br />
						<br />
						<div className="card" style={{ width: "18rem" }} id="personalcard">
							<img
								src={personalspace}
								className="card-img-top"
								alt="personal Space"
							/>
							<br />
							<div className="card-body">
								<h5 className="card-title">Personal Space</h5>
								<br />

								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<br />
								<Link to="/personalspace" className="btn btn-success">
									Open
								</Link>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
			</div>
			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from team{" "}
						<a href="/" className="async">
							SyncSpace
						</a>
					</h3>
					<div className="connect">
						<p className="para-connect">Connect with us</p>
						<Link to="/twitter" className="connect-links">
							X &ensp;
						</Link>
						<Link to="/instagram" className="connect-links">
							Instagram&ensp;
						</Link>
						<Link to="/facebook" className="connect-links">
							Facebook
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SyncSpace />} />
				<Route path="/account" element={<Account />} />
				<Route path="/about" element={<About />} />
				<Route path="/tasklist" element={<TaskList />} />
				<Route path="/journal" element={<Journal />} />
				<Route path="/readinglist" element={<ReadingList />} />
				<Route path="/personalspace" element={<PersonalSpace />} />
				<Route path="/inbox" element={<Inbox />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/helpandsupport" element={<Helpandsupport />} />
				<Route path="/twitter" element={<Twitter />} />
				<Route path="/instagram" element={<Instagram />} />
				<Route path="/facebook" element={<Facebook />} />
				<Route path="/signupwithgoogle" element={<SignupGoogle />} />
				<Route path="/next" element={<Next />} />
			</Routes>
		</Router>
	);
}

export default App;

// import React from "react";
// import "./App.css";
// import Logo from "./components/Logo.png";
// import ToDoimg from "./components/ToDoimg.png";
// import journal from "./components/journal.png";
// import reading from "./components/reading.png";
// import personalspace from "./components/personalspace.jpg";
// import { Link } from "react-router-dom";

// function SyncSpace() {
// 	const Imargin = {
// 		marginRight: "0.5rem",
// 	};
// 	return (
// 		<>
// 			<div className="side-navbar">
// 				<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-vertical">
// 					<div className="container-fluid flex-column">
// 						<a className="navbar-brand" href="/">
// 							<img src={Logo} alt="SynSpace-logo" className="logoimg" />
// 							<br />
// 							<br />
// 						</a>
// 						<button
// 							className="navbar-toggler"
// 							type="button"
// 							data-bs-toggle="collapse"
// 							data-bs-target="#navbarSupportedContent"
// 							aria-controls="navbarSupportedContent"
// 							aria-expanded="false"
// 							aria-label="Toggle navigation">
// 							<span className="navbar-toggler-icon"></span>
// 						</button>

// 						<div
// 							className="collapse navbar-collapse"
// 							id="navbarSupportedContent">
// 							<ul className="navbar-nav mb-2 mb-lg-0">
// 								<li className="nav-item">
// 									<Link
// 										to="/account"
// 										target="_blank"
// 										className="nav-link active"
// 										aria-current="page">
// 										<i style={Imargin} className="fa-solid fa-user"></i> Account
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/">
// 										<i style={Imargin} className="fa-solid fa-house"></i> Home
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/about">
// 										About us
// 									</Link>
// 								</li>
// 								<br />
// 								<br />
// 								<li className="nav-item">
// 									<Link to="/tasklist" className="nav-link">
// 										<i
// 											style={Imargin}
// 											className="fa-sharp fa-solid fa-scissors"></i>
// 										Task list
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/readinglist">
// 										<i style={Imargin} className="fa-solid fa-book"></i>Reading
// 										list
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/journal">
// 										<i style={Imargin} className="fa-solid fa-book-open"></i>
// 										Journal
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/personalspace">
// 										<i style={Imargin} className="fa-solid fa-user"></i>Personal
// 										Space
// 									</Link>
// 								</li>
// 								<br />
// 								<br />
// 								<br />
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/inbox">
// 										<i style={Imargin} className="fa-solid fa-inbox"></i>Inbox
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/settings">
// 										<i style={Imargin} className="fa-solid fa-gear"></i>Settings
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/helpandsupport">
// 										<i
// 											style={Imargin}
// 											className="fa-regular fa-circle-question"></i>
// 										Help & Support
// 									</Link>
// 								</li>
// 								<br />
// 								<br />
// 								<br />
// 							</ul>
// 						</div>
// 					</div>
// 				</nav>
// 			</div>
// 			<div className="main-content">
// 				<br />
// 				<h1 className="welcome">Welcome to SyncSpace</h1>
// 				<br />
// 				<br />
// 				<br />
// 				<div className="row">
// 					<div className="col-md-3">
// 						<div className="card" style={{ width: "18rem" }} id="taskcard">
// 							<img src={ToDoimg} className="card-img-top" alt="To-Do-List" />
// 							<br />
// 							<div className="card-body">
// 								<h5 className="card-title">
// 									<i
// 										style={Imargin}
// 										className="fa-sharp fa-solid fa-scissors"></i>
// 									Task list
// 								</h5>
// 								<p>
// 									Use this template to track your personal tasks. Have your
// 									important tasks for the day.
// 								</p>
// 								<br />
// 								<Link to="/tasklist" className="btn btn-success">
// 									Open
// 								</Link>
// 							</div>
// 						</div>
// 						<br />
// 						<br />
// 						<div className="card" style={{ width: "18rem" }} id="readingcard">
// 							<img src={reading} className="card-img-top" alt="Reading" />
// 							<br />
// 							<div className="card-body">
// 								<h5 className="card-title">
// 									<i style={Imargin} className="fa-solid fa-book"></i>Reading
// 									list
// 								</h5>
// 								<p className="card-text">
// 									The modern day reading list includes more than just books.
// 									We've created a dashboard to help you track your to be read.
// 								</p>
// 								<br />
// 								<Link to="/readinglist" className="btn btn-success">
// 									Open
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-md-3">
// 						<div className="card" style={{ width: "18rem" }} id="journalcard">
// 							<img src={journal} className="card-img-top" alt="Journal" />
// 							<br />
// 							<div className="card-body">
// 								<h5 className="card-title">
// 									<i style={Imargin} className="fa-solid fa-book-open"></i>
// 									Journal
// 								</h5>
// 								<p className="card-text">
// 									Document your life - daily happenings, special occasions, and
// 									reflections on your goals.
// 								</p>
// 								<br />
// 								<Link to="/journal" className="btn btn-success">
// 									Open
// 								</Link>
// 							</div>
// 						</div>
// 						<br />
// 						<br />
// 						<div className="card" style={{ width: "18rem" }} id="personalcard">
// 							<img
// 								src={personalspace}
// 								className="card-img-top"
// 								alt="personal Space"
// 							/>
// 							<br />
// 							<div className="card-body">
// 								<h5 className="card-title">Personal Space</h5>
// 								<br />
// 								<p className="card-text">
// 									Some quick example text to build on the card title and make up
// 									the bulk of the card's content.
// 								</p>
// 								<br />
// 								<Link to="/personalspace" className="btn btn-success">
// 									Open
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<br />
// 				<br />
// 				<br />
// 				<br />
// 			</div>
// 			<div className="footer">
// 				<footer>
// 					<h3 className="footer-content">
// 						With ❤️ from team{" "}
// 						<a href="/" className="async">
// 							SyncSpace
// 						</a>
// 					</h3>
// 					<div className="connect">
// 						<p className="para-connect">Connect with us</p>
// 						<Link to="/twitter" className="connect-links">
// 							X &ensp;
// 						</Link>
// 						<Link to="/instagram" className="connect-links">
// 							Instagram&ensp;
// 						</Link>
// 						<Link to="/facebook" className="connect-links">
// 							Facebook
// 						</Link>
// 						<br />
// 					</div>
// 				</footer>
// 			</div>
// 		</>
// 	);
// }

// export default SyncSpace;
