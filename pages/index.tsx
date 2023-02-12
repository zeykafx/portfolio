import Head from "next/head";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Corentin Detry</title>
				<meta name="description" content="Corentin Detry's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="mr-1">
				<Navbar />

				<motion.div
					className="mx-auto max-w-screen-lg"
					variants={{
						initial: {
							opacity: 0,
							display: "none",
						},
						visible: {
							opacity: 1,
							display: "block",
						},
					}}
					initial="initial"
					animate="visible"
					transition={{
						duration: 0.5,
					}}
				>
					<Hero />
					<Projects />
					<Skills/>
					<Contact/>
					<Footer/>
				</motion.div>
			</main>
		</div>
	);
}
