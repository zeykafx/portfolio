import AnimatedSection from "../animated_section/AnimatedSection";
import HeroLink from "../hero/HeroLink";

export default function Skills() {
	return (
		<AnimatedSection delay={0.2} duration={0.4} className="md:px-10 px-5 mt-5">
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
			</div>
			<div>TODO</div>
			{/* <div className="grid grid-cols-3">
                
            </div> */}
		</AnimatedSection>
	);
}
