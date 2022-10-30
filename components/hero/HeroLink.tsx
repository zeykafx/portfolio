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
				className="relative text-blue-700"
				whileHover="visible"
				initial="hidden"
			>
				{text}
				<motion.span
					className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
					variants={{
						hidden: {
							opacity: 0,
							y: -5,
						},
						visible: {
							opacity: 1,
							y: 1,
						},
					}}
					transition={{
						// damping: 2,
						// mass: 3,
                        type: "spring", stiffness: 100
					}}
				/>
			</motion.a>
		</div>
	);
}
