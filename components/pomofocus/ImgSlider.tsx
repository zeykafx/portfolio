import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

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

export default function ImgSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState<Slider | null>(null);

    const images = [
        'https://play-lh.googleusercontent.com/254cMe5SY7R6jTm6-Q0WrWVgG5XfgDXJDHMH885NPFnCT2INU1Q6MJtzuefCsnQEHsmE=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/BrIerEi8G1qLG_SKfZNmhKi4qum1sQ9GucgzqllPBLNlqqZMBJKomi3xEF0RutdrC-n9=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jX4-vC8tmS2Yn0Af26Pt_h5Tqbb3blSAL3Ev30rNu2LRklN6DlG3wbO83LVBE2HXigE=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/uVa2Qe4upmArVqk8Rk15b1kdyUJNBmtv_ynHDtdF6LDxSEYq_WFkCGrdZ6vYST5jbdI=w2560-h1440-rw'
    ];

    return (
        <>
            {/* CSS files for react-slick */}
            < link
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
        </>

    );
}