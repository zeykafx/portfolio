import AnimatedSection from "../animated_section/AnimatedSection";
import React from "react";
import {BsCheck} from "react-icons/bs";
import HeroLink from "../hero/HeroLink";

export default function Download() {
    return (
        <AnimatedSection delay={0} duration={0.4} className="md:px-10 px-5 mt-14">
            <div className={"flex flex-col justify-center gap-4 p-4 text-center"} id={"install"}>
                <div className={"font-bold text-2xl"}>
                    Download
                </div>
                <div className={"text-xl"}>
                    Pomo Focus is available on Android, Web, and Windows. Unfortunately it is currently not possible for me to publish the application on the App Store.
                </div>
            </div>

            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"}>
                {/* Android */}
                <div className={"flex flex-row"}>
                    <BsCheck className={"text-green-500"} size={25}/>
                    <div className={"flex flex-col gap-1"}>
                        <div className={"text-lg font-bold"}>
                            Android
                        </div>
                        <div className={"text-lg"}>
                            Available on the <HeroLink href={"https://play.google.com/store/apps/details?id=com.zeykafx.pomo_focus"} text={'Play Store'}/>
                        </div>
                    </div>
                </div>

                {/* Web */}
                <div className={"flex flex-row"}>
                    <BsCheck className={"text-green-500"} size={25}/>
                    <div className={"flex flex-col gap-1"}>
                        <div className={"text-lg font-bold"}>
                            Web
                        </div>
                        <div className={"text-lg"}>
                            The web version is available at <HeroLink href={"https://pomo.corentindetry.be"} text={'pomo.corentindetry.be'}/>
                        </div>
                    </div>
                </div>

                {/* Windows */}

                <div className={"flex flex-row"}>
                    <BsCheck className={"text-green-500"} size={25}/>
                    <div className={"flex flex-col gap-1"}>
                        <div className={"text-lg font-bold"}>
                            Windows
                        </div>
                        <div className={"text-lg max-w-sm"}>
                            The windows version can also block sites during the focus period, to do this you must launch the application as administrator and then enter the sites in the settings.
                            <br/>
                            The download link can be found on <HeroLink href={"https://github.com/zeykafx/flutter_pomodoro_timer_app/releases/download/windows_release_1/pomo_focus_installer.exe"} text={'GitHub (direct download link)'}/>
                        </div>
                    </div>
                </div>

            </div>

        </AnimatedSection>
        );
}