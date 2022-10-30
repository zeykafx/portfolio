import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IAnimatedHeadingProps {
	text: string;
	names: Array<string>;
}

export default function AnimatedHeading({
	text,
	names,
}: IAnimatedHeadingProps) {
	const [nameIndex, setNameIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (nameIndex === 0) {
				setNameIndex(1);
			} else {
				setNameIndex(0);
			}
		}, 5000);

		return () => {
			clearInterval(timer);
		};
	}, [nameIndex]);

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
			className="overflow-hidden flex mt-4 mb-4 py-3"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{words.map((word, index) => (
				<motion.span
					variants={child}
					className="mr-1.5 text-4xl font-bold"
					key={index}
				>
					{word}
				</motion.span>
			))}

			<AnimatePresence exitBeforeEnter>
				{names.map((name, index) => {
					if (nameIndex === index) {
						return (
							<>
							{/* changing name */}
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
								{/* animated ! following the name change */}
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
			</AnimatePresence>
		</motion.div>
	);
}
