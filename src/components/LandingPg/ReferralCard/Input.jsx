import Image from "next/image";
import React, { useRef, useState } from "react";
import request from "/src/api/request.js";

function Input() {
	const emailRef = useRef();
	const errorRef = useRef();
	function showError(message) {
		errorRef.current.classList.add("invalid");
		errorRef.current.innerHTML = message;
	}
	const [referralID, setReferralID] = useState("/");
	const [isEmailSent, toggleEmailSent] = useState(false);
	//function to check if email format is valid/not empty
	function checkInput() {
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
			//make 'PUT' request to JSONbin and retreive referral ID
			request(emailRef.current.value);
			//shiw success message
			toggleEmailSent(true);
		}
	}
	//Successful email submit component
	function ReferralSuccess() {
		const [buttonTxt, setbuttonTxt] = useState("Copy");
		function toggleButtonText() {
			window.innerWidth < 992 ? setbuttonTxt("Copy URL") : setbuttonTxt("Copy");
		}
		if (typeof window !== "undefined") {
			window.addEventListener("resize", toggleButtonText);
		}
		return (
			<div className="referral-input-success">
				<div className="referral-input-success-message">
					<Image
						src="/images/success.svg"
						width={24}
						height={24}
						alt="success icon"
					/>
					<p>Your email is confirmed!</p>
				</div>
				<div className="referral-input-success-jointBtn">
					<input
						className="referral-input-success-url"
						value="https://ratepunk.com/referral"
						readOnly
					></input>
					<button className="referral-btn-success">{buttonTxt}</button>
				</div>
			</div>
		);
	}
	//Pending email validation and submition component
	function ReferralPending() {
		return (
			<div className="referral-input-error">
				<small ref={errorRef} className="referral-input-error-message">
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
			</div>
		);
	}
	return (
		<form className="referral-input-wrapper">
			{isEmailSent ? <ReferralSuccess /> : <ReferralPending />}
		</form>
	);
}

export default Input;
