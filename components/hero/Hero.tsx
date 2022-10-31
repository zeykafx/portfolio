import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import HeroLink from "./HeroLink";

export default function Hero() {
	return (
		<div className="mx-auto max-w-screen-md pt-10">
			{/* profile picture */}
			<motion.img
				src="me.jpg"
				alt="me"
				className="rounded-full w-28 h-28"
				variants={{
					hidden: {
						scale: 0,
						opacity: 0,
					},
					visible: {
						scale: 1,
						opacity: 1,
					},
				}}
				initial="hidden"
				animate="visible"
				transition={{ delay: 0.1, type: "spring", bounce: 0.3 }}
			/>
			{/* TODO: add icons for gh, discord,... here */}

			<AnimatedHeading text="Hello, I'm" names={["Corentin", "Zeyka"]} />

			{/* animate the opacity - just like a fade-in */}
			<motion.div
				variants={{
					initial: {
						opacity: 0,
						display: "none",
					},
					visible:{
						opacity: 1,
						display: "block",
					},
				}}
				initial="initial"
				animate="visible"
				transition={{
					duration: 1,
					staggerChildren: 0.5
				}}
			>
				<motion.div className="text-xl font-bold tracking-normal">
					Currently studying Computer Science at{" "}
					<HeroLink href="https://uclouvain.be/" text="UCLouvain" />.
					<br />
					I'm mainly a Flutter dev, but I also use C, Go, and Rust.
				</motion.div>

				<motion.div className="text-lg pt-3">
					With a few years of experience using Flutter, I focus on creating
					beautiful, performant, and reliable apps that help people in their day
					to day lives.
					<br />
					My technology stack includes Dart, C, Go, and Rust. But I enjoy
					learning & experimenting with other languages.
				</motion.div>
			</motion.div>
		</div>
	);
}
