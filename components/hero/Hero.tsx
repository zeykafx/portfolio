import {motion} from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import HeroLink from "./HeroLink";
import {ReactNode} from "react";
import {BsGithub, BsInstagram} from "react-icons/bs";
import {FaDiscord} from "react-icons/fa";
import AnimatedButton from "../projects/AnimatedButton";

interface social {
    social_name: string,
    handle: string,
    link: string,
    icon: ReactNode
}

export const discordInviteLink = "https://discord.gg/VeFn7DgRwa";
const socials: social[] = [
    {
        social_name: "Github",
        handle: "zeykafx",
        link: "https://github.com/zeykafx",
        icon: <BsGithub size={20}/>
    },
    {
        social_name: "Instagram",
        handle: "@corentin.detry",
        link: "https://www.instagram.com/corentin.detry/",
        icon: <BsInstagram size={20}/>
    },
    {
        social_name: "Discord",
        handle: "Zeyka#8688",
        link: discordInviteLink,
        icon: <FaDiscord size={20}/>
    },
]

export default function Hero() {
    return (
        <div className="pt-10 md:px-10 px-5">
            {/* profile picture */}
                <motion.img
                    src="me.jpg"
                    alt="me"
                    className="rounded-full w-28 h-28"
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
                    transition={{delay: 0.1, type: "spring", bounce: 0.3}}
                />

            <AnimatedHeading text="Hello, I'm" name="Corentin"/>

            <motion.div className="text-xl font-bold tracking-normal">
                Currently studying Computer Science at{" "}
                <HeroLink href="https://uclouvain.be/" text="UCLouvain"/>.
                <br/>
                Flutter dev, but also C, Go, and Rust.
            </motion.div>

            <div className={"flex flex-row gap-2 pt-4"}>
                {
                    socials.map((socialElem: social, index: number) => (
                        <div key={index} className="tooltip" data-tip={socialElem.handle}>
                            <AnimatedButton link={socialElem.link}>{socialElem.icon}</AnimatedButton>
                        </div>
                    ))
                }
            </div>

            <motion.div className="text-lg pt-4">
                With a few years of experience using Flutter, I focus on creating
                beautiful, performant, and reliable apps that help people in their day
                to day lives.
            </motion.div>
            <motion.div className="text-lg pt-3">
                My technology stack includes Dart, C, Go, and Rust. But I enjoy learning
                & experimenting with other languages.
            </motion.div>
        </div>
    );
}
