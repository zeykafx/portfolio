import AnimatedSection from "../animated_section/AnimatedSection";
import { Suspense, useState } from "react";
import HeroLink from "../hero/HeroLink";
import dynamic from "next/dynamic";


const EmbeddedApp = dynamic(() => import('./EmbeddedApp'), {
    suspense: true,
})

const ImgSlider = dynamic(() => import('./ImgSlider'), {
    suspense: true,
})

export default function Faq() {


    return (
        <AnimatedSection
            delay={0}
            duration={0.4}
            className="md:px-10 px-5 mt-6 flex flex-col justify-center gap-4 p-4 text-center"
        >
            <div className={"font-bold text-2xl"} id={"more-info"}>
                More info
            </div>
            <div className={"text-xl"}>
                Pomo focus is a pomodoro timer that lets you split your study sessions into smaller chunks with
                breaks in between. The built-in to-do list lets you assign a number of pomodoro sessions for each
                task, allowing you to judge your progress.
            </div>

            <div>
            <Suspense fallback={`Loading...`}>
                <ImgSlider />
            </Suspense>
            </div>

            <div className="font-bold text-2xl mt-14">
                Try it here!
            </div>

            <div className={"text-xl"}>
                You can try pomo focus in your browser, you can also visit the app only at <HeroLink href={"https://pomo.corentindetry.be"} text={'pomo.corentindetry.be'} />.
                Be aware that the performance of the web version is much worse than the native android/windows version (this is due to the fact that flutter for web compiles down to javascript and is therefore bloated).
            </div>

            {/* add a phone border and width only on larger screen, on mobile, the app's width is the device's width and the screen is the screen size */}
            <Suspense fallback={`Loading...`}>
                <EmbeddedApp />
            </Suspense>

        </AnimatedSection>
    );
}