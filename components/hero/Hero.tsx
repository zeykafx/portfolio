import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import HeroLink from "./HeroLink";

export default function Hero() {
	return (
		<div className="pt-10 md:px-10 px-5">
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

			<AnimatedHeading text="Hello, I'm" name="Corentin" />

			<motion.div className="text-xl font-bold tracking-normal">
				Currently studying Computer Science at{" "}
				<HeroLink href="https://uclouvain.be/" text="UCLouvain" />.
				<br />
				Flutter dev, but also C, Go, and Rust.
			</motion.div>

			<motion.div className="text-lg pt-6">
				With a few years of experience using Flutter, I focus on creating
				beautiful, performant, and reliable apps that help people in their day
				to day lives.
			</motion.div>
			<motion.div className="text-lg pt-3">
				My technology stack includes Dart, C, Go, and Rust. But I enjoy learning
				& experimenting with other languages.
			</motion.div>
		</div>
	);
}
