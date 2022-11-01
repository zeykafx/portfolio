import { motion, useAnimation } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface IAnimatedSectionProps {
	className: string;
	children: ReactNode;
    delay: number,
    duration: number
}

export default function AnimatedSection({
	className,
	children,
    delay,
    duration
}: IAnimatedSectionProps) {
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
				delay: delay,
				duration: duration,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
