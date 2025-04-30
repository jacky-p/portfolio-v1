import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { SwiperSlide } from "swiper/react";

import {
	faGraduationCap,
	faLaptopCode,
	faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
//import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import Project from "../components/projects/project";
import Carousel from "./carousel";
import Intro from "../components/homepage/intro";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{/* {INFO.homepage.title} */}
									<Intro />
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<div className="bg-image"></div>
										<img
											src="jp-subject2.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<div className="homepage-projects">
							<Carousel
								slidesPerView={1}
								delay={3500}
								showNav={true}
							>
								{INFO.projects.map((project, index) => (
									<SwiperSlide
										key={index}
										className="w-64 p-2 bg-white rounded-lg shadow-lg text-center"
									>
										<div className="slide-container">
											<Project
												logo={project.logo}
												title={project.title}
												description={
													project.description
												}
												linkText={project.linkText}
												link={`/project/${project.slug}`}
											/>
										</div>
									</SwiperSlide>
								))}
							</Carousel>
						</div>

						<div className="experience-header">
							<h1>Experience & Milestones</h1>
						</div>

						<VerticalTimeline lineColor="rgb(255 246 174 / 51%)">
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								contentArrowStyle={{
									borderRight:
										"7px solid  rgba(255, 246, 174, 1)",
								}}
								date="August 2024 - Present"
								iconStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								icon={<FontAwesomeIcon icon={faLaptopCode} />}
							>
								<h3 className="vertical-timeline-element-title">
									Web Developer
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Digital NEST
								</h4>
								<p>
									Built responsive websites, debugged existing
									code, and collaborated in Agile sprints
									using Git and code reviews.
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								contentArrowStyle={{
									borderRight:
										"7px solid  rgba(255, 246, 174, 1)",
								}}
								date="May 2024 - June 2024"
								iconStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								icon={<FontAwesomeIcon icon={faLaptopCode} />}
							>
								<h3 className="vertical-timeline-element-title">
									IT Support
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Good Shepherd School
								</h4>
								<p>
									Delivered on-site IT support for staff,
									troubleshooting devices and systems while
									making technical solutions easy to
									understand.
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								contentArrowStyle={{
									borderRight:
										"7px solid  rgba(255, 246, 174, 1)",
								}}
								date="May 2024"
								iconStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								icon={
									<FontAwesomeIcon icon={faGraduationCap} />
								}
							>
								<h3 className="vertical-timeline-element-title">
									B.S. in Electrical Engineering and Computer
									Science
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									University of California, Berkeley
								</h4>
								<p>
									Graduated with a BS in Electrical
									Engineering and Computer Science, marking
									the completion of my academic journey and
									the beginning of my professional career in
									tech.
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								contentArrowStyle={{
									borderRight:
										"7px solid  rgba(255, 246, 174, 1)",
								}}
								date="January 2022 - December 2022"
								iconStyle={{
									background: "rgba(255, 246, 174, 1)",
									color: "#000",
								}}
								icon={<FontAwesomeIcon icon={faLaptopCode} />}
							>
								<h3 className="vertical-timeline-element-title">
									Computer Architecture Lab Teaching Assistant
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									UC Berkeley EECS Department
								</h4>
								<p>
									Led lab sessions and provided C programming
									support, helping students grasp computer
									architecture concepts and debug assignments.
								</p>
							</VerticalTimelineElement>
						</VerticalTimeline>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
