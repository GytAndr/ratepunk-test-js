import Image from "next/image";
import React from "react";
import Store from "./Store";

function Footer() {
	return (
		<footer className="footer">
			<section className="footer-stores">
				<Store img="/images/chrome.svg" store="chrome web store" />
				<Store img="/images/apple.svg" store="apple app store" />
				<div className="footer-stores-rating">
					<Image src="/images/star.svg" width={16} height={16} alt="" />
					<Image src="/images/star.svg" width={16} height={16} alt="" />
					<Image src="/images/star.svg" width={16} height={16} alt="" />
					<Image src="/images/star.svg" width={16} height={16} alt="" />
					<Image src="/images/star.svg" width={16} height={16} alt="" />
					<p>Chrome Store reviews</p>
				</div>
			</section>
			<section className="footer-nav"></section>
		</footer>
	);
}

export default Footer;
