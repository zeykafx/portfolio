import AnimatedSection from "../animated_section/AnimatedSection";
import { motion } from "framer-motion";

export default function PomofocusHero() {
    return (
        <AnimatedSection delay={0} duration={0.4} className="md:px-10 px-5 mt-14">
            <div className={"flex flex-col sm:flex-row items-center justify-start gap-10 py-20"}>

                {/*left column with title, description and buttons */}
                <div className={"flex flex-col gap-10"}>
                    {/* Title */}
                    <div className={"flex flex-col gap-1"}>
                        <div className={"font-bold text-3xl -my-[40px]"}>
                            <div className={"relative w-[10.65rem] h-2 bg-blue-700 dark:bg-sky-900 bottom-1 left-0 -z-1"}>
                            </div>
                            <div className={"translate-y-[-38px]"}>
                                Pomo Focus
                            </div>
                        </div>
                        <div className={"font-bold text-2xl"}>
                            Study timer & todo list
                        </div>
                    </div>
                    <div className={"text-xl"}>
                        Pomo Focus lets you follow the pomodoro study method while following your todo list. Available for Android, Web and Windows, pomo focus accompanies you during your study sessions.
                    </div>

                    <div className={"flex sm:flex-row flex-col gap-3"}>
                        <a href={"#install"} className={"btn btn-secondary"}>
                            Download/install
                        </a>
                        <a href={"#more-info"} className={"btn btn-outline dark:btn"}>
                            More info
                        </a>
                    </div>
                </div>

                <motion.img
                    src="icon.png"
                    alt="Pomo Focus logo"
                    className="w-36 h-36 hidden sm:block"
                    variants={{
                        hidden: {
                            scale: 0,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1, type: "spring", bounce: 0.3 }}
                />
            </div>
        </AnimatedSection>
    );
}