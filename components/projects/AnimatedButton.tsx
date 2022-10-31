import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IAnimatedButtonProps {
	link: string;
	children: ReactNode;
}

export default function AnimatedButton({
	link,
	children,
}: IAnimatedButtonProps) {
	return (
		<motion.a
			variants={{
				initial: {
					rotate: 0,
					scale: 1,
				},
				hover: {
					rotate: 10,
					scale: 1.1,
				},
			}}
            initial="initial"
            whileHover="hover"
            transition={{
                duration: 0.1
            }}
			href={link}
			target={"_blank"}
			className="btn focus:ring-2 ring-blue-700-focus"
		>
			{children}
		</motion.a>
	);
}
