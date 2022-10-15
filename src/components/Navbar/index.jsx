import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	const navRef = useRef();
	const btnRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("expanded");
		btnRef.current.classList.toggle("open");
	};

	return (
		<header className="header">
			<div className="header-logo">
				<Image src="/images/logo.svg" height={32} width={120} alt="logo" />

				<div ref={btnRef} className="header-btn" onClick={showNavbar}>
					<div className="header-btn--burger"></div>
				</div>
			</div>
			<nav ref={navRef}>
				<Link href="/">
					<a className="active">Chrome Extenstion</a>
				</Link>
				<Link href="/">Price Comparison</Link>
				<Link href="/">Blog</Link>
			</nav>
		</header>
	);
}

export default Navbar;
