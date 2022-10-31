import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import AnimatedButton from "./AnimatedButton";

interface IProject {
	name: string;
	link: string;
	github: string;
	description: string;
	technologies: string[];
}

let projectsArr: IProject[] = [
	{
		name: "Pomo Focus",
		link: "https://corentindetry.be/pomofocus",
		github: "https://github.com/zeykafx/flutter_pomodoro_timer_app",
		description:
			"Pomo focus is a pomodoro timer that lets you split your study sessions into smaller chunks with breaks in between. The built-in to-do list lets you assign a number of pomodoro sessions for each task, allowing you to judge your progress.",
		technologies: ["Flutter"],
	},
];

export default function Projects() {
	return (
		<div className="flex flex-col items-center py-10">
			{projectsArr.map((project: IProject, index: number) => (
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">{project.name}</h2>
						<p>{project.description}</p>
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
			))}
		</div>
	);
}
