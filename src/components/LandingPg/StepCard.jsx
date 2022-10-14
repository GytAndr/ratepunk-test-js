import React from "react";
import Image from "next/image";
function StepCard({ img, step, title, description }) {
	return (
		<div className="step-card">
			<div>
				<Image src={img} height={140} width={128} alt="step image" />
			</div>
			<div className="step-text-container">
				<p className="step-text--step">{step}</p>
				<p className="step-text--title">{title}</p>
				<p className="step-text--description">{description}</p>
			</div>
		</div>
	);
}

export default StepCard;
