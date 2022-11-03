import {ReactNode} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

interface IAnimatedButtonProps {
    link: string;
    children: ReactNode;
    isPage: boolean;
}

export default function AnimatedButton({
                                           link,
                                           children,
                                           isPage,
                                       }: IAnimatedButtonProps) {
    return (
        <div
            className={isPage ? "tooltip" : ""}
            data-tip={isPage ? "Check out the web page" : ""}
        >
            <motion.div
                variants={{
                    initial: {
                        rotate: 0,
                        scale: 1,
                    },
                    hover: {
                        rotate: 5,
                        scale: 1.07,
                    },
                }}
                initial="initial"
                whileHover="hover"
                transition={{
                    duration: 0.1
                }}
                className="btn btn-ghost focus:ring-2 ring-blue-700-focus"
            >
                {
                    isPage ? (
                        <motion.div
                            animate={{rotate: [0, 10, -10, 0]}}
                            transition={{duration: 0.5, repeatDelay: 2.5, repeat: Infinity}}
                        >
                            <Link href={link}>{children}</Link>
                        </motion.div>
                    ) : (
                        <a href={link}
                           rel="noreferrer"
                           target={"_blank"}>
                            {children}
                        </a>
                    )
                }
            </motion.div>
        </div>

    );
}
