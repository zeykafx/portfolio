export default function Footer() {
    let currentYear = new Date().getFullYear();
	return (
		<footer className="footer footer-center p-4 pt-10 bg-transparent text-base-content">
			<div>
				<p>Developed by Corentin Detry © {currentYear}</p>
			</div>
		</footer>
	);
}
