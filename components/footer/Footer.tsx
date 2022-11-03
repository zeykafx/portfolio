import HeroLink from "../hero/HeroLink";

export default function Footer() {
    let currentYear = new Date().getFullYear();
	return (
		<footer className="footer footer-center p-4 pt-24 bg-transparent text-base-content">
			<div className="flex flex-row">Developed by Corentin Detry © {currentYear} - <HeroLink href="https://github.com/zeykafx/portfolio" text="Source Code"/></div>
		</footer>
	);
}
