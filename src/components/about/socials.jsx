import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = ({orientation = "column", children}) => {
	if (orientation != "column" && orientation != "row") {
		throw new Error("Not Valid Input for orientation")
	}
    return (
      <div style={{display: "flex", flexDirection: `${orientation}`}}>
        {children}
      </div>
    )
  }
  
  const SocialIcon = ({icon, label, link}) => {
    return (
		<div className="social">
			<a 
				href={link} 
				target="_blank" 
				rel="noreferrer"
			>
				<div className="social-icon">
					<FontAwesomeIcon
						icon={icon}
						className="social-icon"
					/>
				</div>
				<div className="social-text">{label}</div>
			</a>
		</div>

	
    )
  }

  Socials.SocialIcon = SocialIcon
  export default Socials
 

/*const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;*/
