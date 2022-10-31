import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
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
				delay: 0.5,
				duration: 0.4,
			}}
			className="md:px-10 px-5 mt-10"
		>
			<div className="text-3xl font-bold">Projects</div>
			<div className="text-lg py-3">Like every developer I have plenty of projects, but here is my top 4 projects.</div>
			<div className="grid grid-cols-1 md:grid-cols-2 items-stretch place-items-center gap-5 py-7">
				{projectsArr.map((project: IProject, index: number) => (
					<Card project={project} index={index} key={index} />
				))}
			</div>
		</motion.div>
	);
}

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
			"Pomo focus is a pomodoro timer app that lets you split your study sessions into small chunks with breaks in between.",
		technologies: ["Flutter"],
	},
	{
		name: "Pomodoro twitch bot",
		link: "/",
		github: "https://github.com/zeykafx/pomodoro_twitch_bot",
		description:
			"Simple twitch bot that allows the chat to start pomodoro sessions which are displayed on Stream.",
		technologies: ["Go", "Typescript", "React"],
	},
	{
		name: "Metar Viewer - Metar Decoder",
		link: "https://play.google.com/store/apps/details?id=com.zeykafx.metarviewer",
		github: "/",
		description:
			"Metar Viewer is an aviation weather app designed to be simple and do its job: Give you accurate and readable METAR, TAF, and Airport informations.",
		technologies: ["Flutter"],
	},
	{
		name: "FS EFB",
		link: "/",
		github: "/",
		description: "A VFR & IFR EFB designed for flight simulators, complete with flight planning, weather reports, online traffic, and much more!",
		technologies: ["Flutter", "Go", "Java", "Python","Postgresql"],
	},
];
