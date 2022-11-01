import { ILanguage } from "./Skills";
import { AnimationControls, motion } from "framer-motion";

interface ILanguageCardProps {
    language: ILanguage,
    custom: number,
    controls: AnimationControls
}

export default function LanguageCard({ language, custom, controls }: ILanguageCardProps) {
    return (
        <motion.a
            variants={{
                initial: {
                    opacity: 0,
                    y: 0,
                },
                hover: {
                    y: -3,
                },
                pressed: {
                    y: 3,
                }
            }}
            initial="initial"
            whileHover="hover"
            whileTap="pressed"
            animate={controls}
            custom={custom}
            href={language.site}
            target="_blank"
            className="card bg-base-100 shadow-lg border border-base-200 dark:border-2 dark:border-base-300r pt-3 pb-2 text-center cursor-pointer"
        >
            {language.icon}

            <p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
                {language.name}
            </p>
        </motion.a>
    );
}