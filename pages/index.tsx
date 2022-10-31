import Head from "next/head";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Corentin Detry</title>
				<meta name="description" content="Corentin Detry's portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />
				<motion.div
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
						duration: 1,
						staggerChildren: 0.5,
					}}
				>
					<Hero />
					<Projects />
				</motion.div>
			</main>
		</div>
	);
}
