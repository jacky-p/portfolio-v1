import React from "react";
import { faBriefcase, faRobot } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<div className="left-works" >
				<Card
					icon={faBriefcase}
					title="Experience"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="./Digital-NEST-Favicon-1.png"
									alt="digitalnest"
									className="work-image"
								/>
								<div className="work-title">Digital NEST</div>
								<div className="work-subtitle">
									Web Development Intern
								</div>
								<div className="work-duration">2024 - Present</div>
							</div>

							<div className="work">
								<img
									src="./uc_berkeley_logo.jpeg"
									alt="ucberkeley"
									className="work-image"
								/>
								<div className="work-title">UC Berkeley EECS Department</div>
								<div className="work-subtitle">
									Academic Intern
								</div>
								<div className="work-duration">Jan 2022 - Dec 2022</div>
							</div>
						</div>
					}
				/>	
			</div>
			<div className="right-works" >
				<Card
					icon={faBriefcase}
					title="Experience"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="./Digital-NEST-Favicon-1.png"
									alt="digitalnest"
									className="work-image"
								/>
								<div className="work-title">Digital NEST</div>
								<div className="work-subtitle">
									Web Development Intern
								</div>
								<div className="work-duration">2024 - Present</div>
							</div>

							<div className="work">
								<img
									src="./uc_berkeley_logo.jpeg"
									alt="ucberkeley"
									className="work-image"
								/>
								<div className="work-title">UC Berkeley EECS Department</div>
								<div className="work-subtitle">
									Academic Intern
								</div>
								<div className="work-duration">Jan 2022 - Dec 2022</div>
							</div>
						</div>
					}
				/>	
			</div>
			
			
		</div>
	);
};

export default Works;
