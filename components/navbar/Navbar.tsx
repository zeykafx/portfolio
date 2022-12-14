import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

enum Themes {
	light = "light",
	dark = "dark",
}

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		// very hacky way of getting the data-theme attribute from the html element...
		// need to do this because sometimes the dark mode button doesn't have the right icon since the theme variable is not set, probs due to SSG or SSR
		document.getElementsByClassName("scroll-smooth")[0].attributes.getNamedItem("data-theme")?.value === "dark" ? setTheme(Themes.dark) : setTheme(Themes.light);
	}, [setTheme]);

	return (
		<div className="navbar justify-between">
			<Link href="/" className="btn btn-ghost normal-case text-2xl">
				Corentin Detry
			</Link>
			<button
				className="btn btn-ghost focus:ring-2 ring-blue-700-focus"
				aria-label="Dark Mode button"
				onClick={() => {
					setTheme(theme === Themes.light ? Themes.dark : Themes.light);
				}}
			>
				{mounted ? (
					theme == Themes.dark ? (
						<BsSunFill size={20}/>
					) : (
						<BsFillMoonFill size={20}/>
					)
				) : null}
			</button>
		</div>
	);
}
