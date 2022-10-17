import React, { useRef } from "react";

function Input() {
	const emailRef = useRef();
	const errorRef = useRef();
	function showError(message) {
		errorRef.current.classList.add("invalid");
		console.log((errorRef.current.innerHTML = message));
	}
	function checkInput() {
		//helper function to check if email format is valid
		function isEmailValid(email) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			);
		}
		if (emailRef.current.value.trim() === "") {
			showError("Email cannot be blank");
		} else if (!isEmailValid(emailRef.current.value)) {
			showError("Please enter valid email format");
		} else {
			errorRef.current.classList.remove("invalid");
			//send data to jsonbin
		}
	}
	return (
		<form className="referral-input-wrapper">
			<small ref={errorRef} className="referral-input-error">
				Error Message
			</small>
			<input
				className="referral-input"
				type="email"
				placeholder="Enter your email address"
				ref={emailRef}
			></input>
			<button className="referral-btn" type="button" onClick={checkInput}>
				Get Referral Link
			</button>
		</form>
	);
}

export default Input;
