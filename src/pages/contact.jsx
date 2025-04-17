import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import ContactForm from "../components/contact/contactForm";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in reaching out. I
							greatly value your feedback, questions, and
							suggestions. Should you have any specific inquiries
							or comments, please feel free to email me directly
							at{" "}
							<a
								className="email-link"
								href={`mailto:${INFO.main.email}`}
							>
								{INFO.main.email}
							</a>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials-subtitle">
							<h3>
								Contact Me
								<br />
								through
								<br />
								Socials!
							</h3>
						</div>
						<div className="contact-socials">
							<Socials>
								<Socials.SocialIcon
									icon={faGithub}
									link={INFO.socials.github}
									label={"GitHub"}
								/>
								<Socials.SocialIcon
									icon={faLinkedin}
									link={INFO.socials.linkedin}
									label={"LinkedIn"}
								/>
							</Socials>
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

export default Contact;
