import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import PomofocusHero from "../components/pomofocus/PomofocusHero";
import Faq from "../components/pomofocus/Faq";
import Download from "../components/pomofocus/Download";

export default function Pomofocus() {
    return (
        <div>
            <Head>
                <title>Pomo Focus</title>
                <meta name="description" content="Pomo focus is a pomodoro timer app that lets you split your study sessions into small chunks with breaks in between." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"mr-1"}>
                <Navbar />
                <motion.div
                    className="mx-auto max-w-screen-lg"
                    variants={{
                        initial: {
                            opacity: 0,
                            display: "none",
                        },
                        visible: {
                            opacity: 1,
                            display: "block",
                        },
                    }}
                    initial="initial"
                    animate="visible"
                    transition={{
                        duration: 1,
                    }}
                >
                    <PomofocusHero/>
                    <Faq/>
                    <Download/>
                </motion.div>

                <Footer />
            </main>
        </div>
    );
}