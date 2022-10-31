import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import AnimatedButton from "./AnimatedButton";
import { IProject } from "./Projects";

interface ICardProps {
	project: IProject;
	index: number;
}

export default function Card({ project, index }: ICardProps) {
	return (
		<div
			className="card w-96 bg-base-100 shadow-2xl border border-base-200"
		>
			<div className="card-body">
				<h2 className="card-title">{project.name}</h2>
				<p>{project.description}</p>
				<div className="flex flex-row space-x-1">
					{project.technologies.map((tech: string, indexTech: number) => (
						<div className="font-slate" key={indexTech}>
							{tech}
							{/* add a comma to the technologies */}
							{index < project.technologies.length - 1 ? "," : ""}
						</div>
					))}
				</div>

				<div className="card-actions justify-end">
					<AnimatedButton link={project.link}>
						<FiExternalLink />
					</AnimatedButton>
					<AnimatedButton link={project.github}>
						<BsGithub />
					</AnimatedButton>
				</div>
			</div>
		</div>
	);
}
