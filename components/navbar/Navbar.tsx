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

	useEffect(() => setMounted(true), []);

	return (
		<div className="navbar justify-between">
			<Link href="/" className="btn btn-ghost normal-case text-2xl">
				Corentin Detry
			</Link>
			<button
				className="btn focus:ring-2 ring-blue-700-focus"
				aria-label="Dark Mode button"
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
