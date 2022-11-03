import { ReactNode, useEffect } from "react";
import { SiGoland, SiC, SiTypescript, SiPython } from "react-icons/si";
import { DiDart } from "react-icons/di";
import { FaRust } from "react-icons/fa";
import AnimatedSection from "../animated_section/AnimatedSection";
import HeroLink from "../hero/HeroLink";
import LanguageCard from "./LanguageCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";


export interface ILanguage {
	name: string,
	site: string,
	icon: ReactNode
}


export default function Skills() {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start((i) => ({
				opacity: 1,
				transition: { delay: (i + 2) * 0.2 },
			}));
		}
	}, [controls, inView]);

	return (
		<AnimatedSection delay={0.2} duration={0.4} className="md:px-10 px-5 mt-14">
			<div className="text-3xl font-bold">Skills</div>
			<div className="text-lg pt-3">
				I started Coding back in 2019, and since then I have used many
				technologies and programming languages, whether it is for University or
				for a side project, I always like to learn the ins and outs of the tools
				I use.
			</div>
			<div className="text-lg pt-3">
				When it comes to programming languages, safety, performance, and ease of
				use are very important to me. This is why my favorite language is{" "}
				<HeroLink href="https://go.dev" text="Golang" />, the speed it achieves
				while being absurdly easy makes it my go-to choice for most projects.
				Whenever speed is critical, <HeroLink href="https://en.wikipedia.org/wiki/C_(programming_language)" text="C" /> or <HeroLink href="https://www.rust-lang.org/" text="Rust" /> are my prefered languages.
			</div>
			<div className="text-lg pt-3">
				Here is some of my favorite languages, in which I&apos;m comfortable.
			</div>
			<div
				className="grid grid-cols-3 pt-8 gap-4"
			>
				{
					languages.map((language: ILanguage, index: number) => (
						<div
							key={index}
							ref={ref}
						>
							<LanguageCard language={language} custom={index} controls={controls} />
						</div>
					))
				}
			</div>
		</AnimatedSection>
	);
}

const languages: ILanguage[] = [
	{
		name: "Go",
		site: "https://go.dev/",
		icon: <SiGoland className="mx-auto w-9 h-9" />
	},
	{
		name: "Dart",
		site: "https://dart.dev/",
		icon: <DiDart className="mx-auto w-9 h-9" />
	},
	{
		name: "C",
		site: "https://en.wikipedia.org/wiki/C_(programming_language)",
		icon: <SiC className="mx-auto w-9 h-9" />
	},
	{
		name: "Rust",
		site: "https://www.rust-lang.org/",
		icon: <FaRust className="mx-auto w-9 h-9" />
	},
	{
		name: "Typescript",
		site: "https://www.typescriptlang.org/",
		icon: <SiTypescript className="mx-auto w-9 h-9" />
	},
	{
		name: "Python",
		site: "https://www.python.org/",
		icon: <SiPython className="mx-auto w-9 h-9" />
	}
]