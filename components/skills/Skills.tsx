import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HeroLink from "../hero/HeroLink";

export default function Skills() {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={{
				hidden: {
					y: 30,
					opacity: 0,
				},
				visible: {
					y: 0,
					opacity: 1,
				},
			}}
			transition={{
				delay: 0.1,
				duration: 0.4,
			}}
			className="md:px-10 px-5 mt-5"
		>
			<div className="text-3xl font-bold">Skills</div>
			<div className="text-lg pt-3">
				I started Coding back in 2019, and since then I have used many
				technologies and programming languages, whether it's for University or
				for a side project, I always like to learn the ins and outs of the tools
				I use.
			</div>
			<div className="text-lg pt-3">
				When it comes to programming languages, safety, performance, and ease of
				use are very important to me. This is why my favorite language is{" "}
				<HeroLink href="https://go.dev" text="Golang" />, the speed it achieves
				while being absurdly easy makes it my go-to choice for most projects.
			</div>
            {/* <div className="grid grid-cols-3">
                
            </div> */}
		</motion.div>
	);
}
