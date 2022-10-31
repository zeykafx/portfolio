import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IAnimatedHeadingProps {
	text: string;
	name: string;
	// names: Array<string>;
}

// code heavily inspired by https://github.com/chetanverma16/youtube-react-framer-motion/blob/main/component/AnimatedTextWord.js

export default function AnimatedHeading({ text, name }: IAnimatedHeadingProps) {
	// const [nameIndex, setNameIndex] = useState(0);

	// // setup the interval that will switch the name
	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setNameIndex(nameIndex === 0 ? 1 : 0);
	// 	}, 5000);

	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, [nameIndex]);

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

			{/* <AnimatePresence mode="wait">
				{names.map((name, index) => {
					if (nameIndex === index) {
						return (
							<>
							
								<motion.span
									key={index}
									className="text-4xl font-bold"
									variants={child}
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -20, opacity: 0 }}
									transition={{ duration: 0.5 }}
								>
									{name}
								</motion.span>
								
								<motion.span
									layoutId="exclamationmark"
									variants={child}
									transition={{ duration: 0.4, opacity: 0.5 }}
									className="text-4xl font-bold"
								>
									!
								</motion.span>
							</>
						);
					}
				})}
			</AnimatePresence> */}
		</motion.div>
	);
}
