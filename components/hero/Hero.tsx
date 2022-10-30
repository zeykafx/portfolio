import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
	return (
		<div className="mx-auto max-w-screen-md pt-10">
			<motion.img
				src="me.jpg"
				alt="me"
				className="rounded-full w-28 h-28 mt-20"
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

			<div className="flex items-center">
                <AnimatedHeading text="Hello, I'm" names={["Corentin", "Zeyka"]}/>
			</div>
		</div>
	);
}
