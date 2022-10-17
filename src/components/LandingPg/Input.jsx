import React, { useState } from "react";

function Input() {
	const [emailValue, setEmailValue] = useState("");
	const onEmailChange = (e) => {
		setEmailValue(e.target.value);
		console.log(emailValue);
	};
	return (
		<>
			<input
				className="referral-input"
				placeholder="Enter your email address"
				value={emailValue}
				onChange={onEmailChange}
			></input>
			<button className="referral-btn">Get Referral Link</button>
		</>
	);
}

export default Input;
