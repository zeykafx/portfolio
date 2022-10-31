import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IAnimatedHeadingProps {
	text: string;
	name: string;
	// names: Array<string>;
}

// code heavily inspired by https://github.com/chetanverma16/youtube-react-framer-motion/blob/main/component/AnimatedTextWord.js

export default function AnimatedHeading({ text, name }: IAnimatedHeadingProps) {

	const words = text.split(" ");

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: "string",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			y: 20,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
				delay: 0.5,
			},
		},
	};

	return (
		<motion.div
			className="overflow-hidden flex mt-4 py-3"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{/* all the main words */}
			{words.map((word, index) => (
				<motion.span
					variants={child}
					className={"mr-1.5 text-4xl font-bold"}
					key={index}
				>
					{word}
				</motion.span>
			))}

			<motion.span variants={child} className={"text-4xl font-bold dark:text-blue-700 text-sky-800"}>
				{name}
			</motion.span>

			<motion.span variants={child} className="text-4xl font-bold">
				!
			</motion.span>

		</motion.div>
	);
}
