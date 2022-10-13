import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ratepunk - Invite your friends!</title>
				<meta name="description" content="Hotel price comparison" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Navbar />
			<Footer />
		</>
	);
}
