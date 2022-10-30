import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

enum Themes {
	light = "light",
	dark = "dark",
}

export default function Navbar() {
	const { theme, setTheme } = useTheme();

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
				{theme == Themes.dark ? <BsSunFill /> : <BsFillMoonFill />}
			</button>
		</div>
	);
}
