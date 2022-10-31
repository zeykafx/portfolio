import { motion } from "framer-motion";

interface IHeroLinkProps {
	href: string;
	text: string;
}

export default function HeroLink({ href, text }: IHeroLinkProps) {
	return (
		<div className="inline">
			<motion.a
				href={href}
				target="_blank"
				className="relative dark:text-blue-700 text-sky-800"
				whileHover="visible"
				initial="hidden"
			>
				{text}
				<motion.span
					className="absolute bottom-0 left-0 w-full dark:bg-blue-700 bg-sky-800 h-0.5"
					variants={{
						hidden: {
							opacity: 0,
							y: -5,
                            width: 0
						},
						visible: {
							opacity: 1,
							y: 0,
                            width: "100%"
						},
					}}
					transition={{
                        type: "spring",
                        stiffness: 60,
                        duration: 0.5
					}}
				/>
			</motion.a>
		</div>
	);
}
