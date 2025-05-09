//import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
//import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Caro from "./pages/carousel";

//import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import ProjectPage from "./pages/projectDescription";

function App() {
	//Google Analytics
	/*useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);*/

	//line 30: removed <Route path="/articles" element={<Articles />} />
	return (
		<div className="App">
			<Routes>
				<Route path="" element={<Homepage />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="caro" element={<Caro />} />
				<Route path="articles" element={<ProjectPage />} />
				<Route path="article/:slug" element={<ReadArticle />} />
				<Route path="contact" element={<Contact />} />
				<Route path="project/:slug" element={<ProjectPage />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
