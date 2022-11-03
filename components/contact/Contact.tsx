import AnimatedSection from "../animated_section/AnimatedSection";
import HeroLink from "../hero/HeroLink";
import {discordInviteLink} from "../hero/Hero";
import {useState} from "react";

export default function Contact() {
    const [visible, setVisible] = useState(false);

    return (
        <AnimatedSection delay={1} duration={0.4} className="md:px-10 px-5 mt-14">
            <div className="text-3xl font-bold">Get in touch</div>
            <div className="text-lg pt-3">
                If you want to get in contact with me, the best way is either via email or via <span
                className={"tooltip"} data-tip={"Zeyka#8688"}><HeroLink href={discordInviteLink}
                                                                        text={"discord"}/></span>.
            </div>

            <div className={"mt-3 flex flex-row gap-2 items-center"}>
                <div className={"text-lg"}>Email: </div>
                {visible ? (
                    <a href={"mailto:corentin.detry@gmail.com"} className={"text-lg font-medium"}>
                        corentin.detry@gmail.com
                    </a>
                ) : (
                    <button className={"btn btn-ghost"} onClick={() => setVisible(true)}>
                        Reveal
                    </button>
                )}
            </div>


        </AnimatedSection>
    );
}