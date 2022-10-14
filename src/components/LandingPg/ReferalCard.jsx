import React from "react";

function ReferralCard() {
	return (
		<div className="referral-card">
			<h1 className="referral-title">REFER FRIENDS AND GET REWARDS</h1>
			<p className="referral-description">
				Refer your friends to us and earn hotel booking vouchers. We&apos;ll
				give you 1 coin for each friend that installs our extension. Minimum
				cash-out at 20 coins.
			</p>
			<input
				className="referral-input"
				placeholder="Enter your email address"
			></input>
			<button className="referral-btn">Get Referral Link</button>
			<p className="referral-notice">Limits on max rewards apply.</p>
		</div>
	);
}

export default ReferralCard;
