import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

enum Themes {
	light = "light",
	dark = "dark",
}

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<div className="navbar bg-lightTheme justify-between">
			<a href="/" className="btn btn-ghost normal-case text-2xl">
				Corentin Detry
			</a>
			<button
				className="btn focus:ring-2 ring-primary-focus"
				onClick={() => {
					setTheme(theme === Themes.light ? Themes.dark : Themes.light);
				}}
			>
				{mounted ? (
					theme == Themes.dark ? (
						<BsSunFill />
					) : (
						<BsFillMoonFill />
					)
				) : null}
			</button>
		</div>
	);
}
