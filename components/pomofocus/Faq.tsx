import AnimatedSection from "../animated_section/AnimatedSection";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import HeroLink from "../hero/HeroLink";

// Settings for the slider
const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Faq() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    const images = [
        'https://play-lh.googleusercontent.com/254cMe5SY7R6jTm6-Q0WrWVgG5XfgDXJDHMH885NPFnCT2INU1Q6MJtzuefCsnQEHsmE=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/BrIerEi8G1qLG_SKfZNmhKi4qum1sQ9GucgzqllPBLNlqqZMBJKomi3xEF0RutdrC-n9=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jX4-vC8tmS2Yn0Af26Pt_h5Tqbb3blSAL3Ev30rNu2LRklN6DlG3wbO83LVBE2HXigE=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/uVa2Qe4upmArVqk8Rk15b1kdyUJNBmtv_ynHDtdF6LDxSEYq_WFkCGrdZ6vYST5jbdI=w2560-h1440-rw'
    ];


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
                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <Slider {...settings} ref={(slider: Slider) => setSlider(slider)} className={"h-1/2"}>
                    {images.map((url, index) => (
                        <div className={"h-[35rem]"} key={index}>
                            <Image
                                src={url}
                                fill={true}
                                alt={"pomo focus screenshot"}
                                className={"object-scale-down"}
                            />
                        </div>

                    ))}
                </Slider>
            </div>

            <div className="font-bold text-2xl mt-14">
                Try it here!
            </div>

            <div className={"text-xl"}>
                You can try pomo focus in your browser, you can also visit the app only at <HeroLink href={"https://pomo.corentindetry.be"} text={'pomo.corentindetry.be'}/>.
                Be aware that the performance of the web version is much worse than the native android/windows version (this is due to the fact that flutter for web compiles down to javascript and is therefore bloated).
            </div>

            {/* add a phone border and width only on larger screen, on mobile, the app's width is the device's width and the screen is the screen size */}
            <div className="md:mockup-phone mt-10 md:w-auto md:h-auto h-screen w-full">
                    <div className="bg-black h-6 relative top-0 left-0 w-full z-10"></div>
                    <div className="display h-full">
                        <div className="artboard artboard-demo md:phone-5 md:h-auto sm:block sm:w-auto h-screen">
                            <iframe src="https://pomo.corentindetry.be/#/" className="h-full w-full"></iframe>

                        </div>
                    </div>
                </div>

        </AnimatedSection>
    );
}