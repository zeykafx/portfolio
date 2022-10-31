import Card from "./Card";

export interface IProject {
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
	{
		name: "FS EFB",
		link: "/",
		github: "https://github.com/zeykafx/flutter-VFR-map",
		description: "A VFR moving map, designed for flight simulators only.",
		technologies: ["Flutter", "Go", "Postgresql"]
	}
];

export default function Projects() {
	return (
		<div className="flex flex-col items-center py-10 space-y-4">
			{projectsArr.map((project: IProject, index: number) => (
				<Card project={project} index={index}/>
			))}
		</div>
	);
}
