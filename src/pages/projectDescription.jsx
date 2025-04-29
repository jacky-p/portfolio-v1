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
import { useParams } from "react-router-dom";

const ProjectPage = () => {
	const { slug } = useParams();
	const project = INFO.projects.find((p) => p.slug === slug);
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
								{project.title}
							</div>

							<div className="pd-text pd-subtitle">
								{project.description}
							</div>
						</div>
						<div className="left-project-container">
							<div className="tech-container pd-text">
								<h2 className="techTitle">Tech Stack</h2>
								<p>
									<strong>Frontend:</strong>{" "}
									{project.techStack.frontend} <br />
									<strong>Logic & Algorithm:</strong>{" "}
									{project.techStack.logicAlgorithm} <br />
									<strong>Backend:</strong>{" "}
									{project.techStack.backend}
								</p>
							</div>

							<div className="feature-container pd-text">
								<h2 className="featureTitle">Features</h2>
								{project.features.map((feature, index) => (
									<div
										className="feature-list list-points"
										key={index}
									>
										<ul>
											<li>{feature}</li>
										</ul>
									</div>
								))}
							</div>

							<div className="motivation-container pd-text">
								<h2 className="motivationTitle">Motivation</h2>
								{project.motivation}
							</div>

							<div className="challenges-container pd-text">
								<h2 className="challengesTitle">Challenges</h2>
								{project.challenges.map((challenge, index) => (
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
								))}
							</div>

							<div className="impact-container pd-text">
								<h2 className="impactTitle">Impact</h2>
								<Carousel
									slidesPerView={1}
									delay={3500}
									showNav={false}
								>
									{project.impact.map((point, index) => (
										<SwiperSlide
											key={index}
											className="feat-slide w-64 p-4 bg-white rounded-lg shadow-lg text-center"
										>
											<div className="feat-slide-container">
												<p>{point}</p>
											</div>
										</SwiperSlide>
									))}
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

							{project.images.map((image, index) => (
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
											link={project.gitRepo}
											label={"Link to Github Repo"}
										/>
										<Socials.SocialIcon
											icon={faLink}
											link={project.link}
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
