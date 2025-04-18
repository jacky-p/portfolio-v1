import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projectDescription.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Socials from "../components/about/socials";
import Carousel from "./carousel";
import { SwiperSlide } from "swiper/react";

const ProjectPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Project | ${INFO.projects.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="Proj" />
				<div className="content-wrapper">
					<div className="pd-logo-container">
						<div className="pd-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="pd-main-container">
						<div className="top-project-container">
							<div className="title pd-title">
								{INFO.projects[0].title}
							</div>

							<div className="pd-text pd-subtitle">
								{INFO.projects[0].description}
							</div>
						</div>
						<div className="left-project-container">
							<div className="tech-container pd-text">
								<h2 className="techTitle">Tech Stack</h2>
								<p>
									<strong>Frontend:</strong>{" "}
									{INFO.projects[0].techStack.frontend} <br />
									<strong>Logic & Algorithm:</strong>{" "}
									{INFO.projects[0].techStack.logicAlgorithm}{" "}
									<br />
									<strong>Backend:</strong>{" "}
									{INFO.projects[0].techStack.backend}
								</p>
							</div>

							<div className="feature-container pd-text">
								<h2 className="featureTitle">Features</h2>
								{INFO.projects[0].features.map(
									(feature, index) => (
										<div
											className="feature-list list-points"
											key={index}
										>
											<ul>
												<li>{feature}</li>
											</ul>
										</div>
									)
								)}
							</div>

							<div className="motivation-container pd-text">
								<h2 className="motivationTitle">Motivation</h2>
								{INFO.projects[0].motivation}
							</div>

							<div className="challenges-container pd-text">
								<h2 className="challengesTitle">Challenges</h2>
								{INFO.projects[0].challenges.map(
									(challenge, index) => (
										<div
											className="challenge-list list-points"
											key={index}
										>
											<ul>
												<li>
													<strong>
														{challenge.challenge}:{" "}
													</strong>{" "}
													{challenge.description}
												</li>
											</ul>
										</div>
									)
								)}
							</div>

							<div className="impact-container pd-text">
								<h2 className="impactTitle">Impact</h2>
								<Carousel
									slidesPerView={1}
									delay={3500}
									showNav={false}
								>
									{INFO.projects[0].impact.map(
										(point, index) => (
											<SwiperSlide
												key={index}
												className="feat-slide w-64 p-4 bg-white rounded-lg shadow-lg text-center"
											>
												<div className="feat-slide-container">
													<p>{point}</p>
												</div>
											</SwiperSlide>
										)
									)}
								</Carousel>
							</div>
						</div>
						<div className="right-project-container">
							<video className="pd-vid" autoPlay loop muted>
								<source
									src="nestmeet-demo.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>

							{INFO.projects[0].images.map((image, index) => (
								<figure>
									<img
										className="pd-image img1"
										src={image.src}
										alt="project demo"
									/>
									<figcaption>{image.caption}</figcaption>
								</figure>
							))}

							<div className="demo-container pd-text">
								<h2 className="demoTitle">Demo & Links</h2>

								<div className="project-links">
									<Socials>
										<Socials.SocialIcon
											icon={faGithub}
											link={INFO.projects[0].gitRepo}
											label={"Link to Github Repo"}
										/>
										<Socials.SocialIcon
											icon={faLink}
											link={INFO.projects[0].link}
											label={"Demo Link"}
										/>
									</Socials>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectPage;
