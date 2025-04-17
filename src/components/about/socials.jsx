import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
 