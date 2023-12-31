import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, img } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-img">
							<img src={img} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-logo">
                            {logo.map((logoUrl, index) => (
                                <img key={index} src={logoUrl} alt={`Logo ${index}`} />
                            ))}
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
