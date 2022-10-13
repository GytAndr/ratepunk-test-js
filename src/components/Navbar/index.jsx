import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	};
	return (
		<header>
			<Image
				className="nav-logo"
				src="/images/logo.svg"
				height={32}
				width={120}
				alt="logo"
			/>
			<nav ref={navRef}>
				<Link href="/">
					<a className="active">Chrome Extenstion</a>
				</Link>
				<Link href="/">Price Comparison</Link>
				<Link href="/">Blog</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<Image
						src="/images/close.svg"
						width={18}
						height={18}
						alt="close navigations menu"
					/>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<Image
					src="/images/menu.svg"
					width={20}
					height={18}
					alt="open navigations menu"
				/>
			</button>
		</header>
	);
}

export default Navbar;
