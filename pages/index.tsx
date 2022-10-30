import Head from "next/head";
import { useState } from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

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
				<Hero />
			</main>
		</div>
	);
}
