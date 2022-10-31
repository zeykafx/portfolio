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
		<div className="card m:w-auto w-full bg-base-100 shadow-lg border border-base-200 dark:border-2 dark:border-base-300 ">
			<div className="card-body">
				<h2 className="card-title">{project.name}</h2>
				<p>{project.description}</p>
				<div className="flex flex-row justify-between items-center space-x-1">
					<div className="flex flex-row gap-1">
						{project.technologies.map((tech: string, indexTech: number) => (
							<div key={indexTech}>
								{tech}
								{/* add a comma to the technologies */}
								{indexTech < project.technologies.length - 1 ? "," : ""}
							</div>
						))}
					</div>

					<div className="flex flex-row">
						{project.link !== "/" ? (
							<AnimatedButton link={project.link}>
								<FiExternalLink size={20}/>
							</AnimatedButton>
						) : (
							<></>
						)}
						{project.github !== "/" ? (
							<AnimatedButton link={project.github}>
								<BsGithub size={20}/>
							</AnimatedButton>
						) : (
							<></>
						)}

						{project.github === "/" && project.link === "/" ? <div>No links</div> : <></>}
					</div>
				</div>
			</div>
		</div>
	);
}
