import Image from "next/image";
import React from "react";
import Store from "./Store";

function Footer() {
	return (
		<footer className="footer">
			<section className="footer-stores">
				<Store img="/images/chrome.svg" store="chrome web store" />
				<Store img="/images/apple.svg" store="apple app store" />
			</section>
			<section className="footer-nav"></section>
		</footer>
	);
}

export default Footer;
