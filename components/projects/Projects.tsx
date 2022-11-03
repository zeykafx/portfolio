import Card from "./Card";
import AnimatedSection from "../animated_section/AnimatedSection";
import HeroLink from "../hero/HeroLink";

export default function Projects() {
    return (
        <AnimatedSection delay={0.5} duration={0.4} className="md:px-10 px-5 mt-14">
            <div className="text-3xl font-bold">Projects</div>
            <div className="text-lg py-3">
                Like every developer I have plenty of projects, but here is my top 4.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch place-items-center gap-5 py-5">
                {projectsArr.map((project: IProject, index: number) => (
                    <Card project={project} index={index} key={index}/>
                ))}
            </div>
            <div className={"text-lg py-3"}>
                I have worked on and collaborated on lots more projects, you can see the full list of public projects on
                my <HeroLink text={"github"} href={"https://github.com/zeykafx"}/>, of course there are plenty of
                private repositories for various types of projects.
            </div>
        </AnimatedSection>
    );
}

export interface IProject {
    name: string;
    link: string;
    isPage: boolean;
    github: string;
    description: string;
    technologies: string[];
}

let projectsArr: IProject[] = [
    {
        name: "Pomo Focus",
        link: "/pomofocus",
        isPage: true,
        github: "https://github.com/zeykafx/flutter_pomodoro_timer_app",
        description:
            "Pomo focus is a pomodoro timer app that lets you split your study sessions into small chunks with breaks in between.",
        technologies: ["Flutter"],
    },
    {
        name: "Pomodoro twitch bot",
        link: "/",
        isPage: false,
        github: "https://github.com/zeykafx/pomodoro_twitch_bot",
        description:
            "Simple twitch bot that allows the chat to start pomodoro sessions which are displayed on Stream.",
        technologies: ["Go", "Typescript", "React"],
    },
    {
        name: "Metar Viewer - Metar Decoder",
        link: "https://play.google.com/store/apps/details?id=com.zeykafx.metarviewer",
        isPage: false,
        github: "/",
        description:
            "Metar Viewer is an aviation weather app designed to be simple and do its job: Give you accurate and readable METAR, TAF, and Airport information.",
        technologies: ["Flutter"],
    },
    {
        name: "FS EFB",
        link: "/",
        isPage: false,
        github: "/",
        description:
            "A VFR & IFR EFB designed for flight simulators, complete with flight planning, weather reports, online traffic, and much more! The project is not fully done yet but it is getting there.",
        technologies: ["Flutter", "Go", "Java", "Python", "Postgresql"],
    },
];
