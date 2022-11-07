export default function EmbeddedApp() {
    return (
        <div>
            <div className="max-[500px]:block hidden font-bold">Interactions disabled on phones</div>
            <div className="md:mockup-phone mt-10 md:w-auto md:h-auto h-screen w-full px-0 min-[500px]:px-5 max-[500px]:pointer-events-none">
                <div className="bg-black h-6 relative top-0 left-0 w-full z-10"></div>
                <div className="display h-full">
                    <div className="artboard artboard-demo md:phone-5 md:h-auto sm:block sm:w-auto h-screen">
                        <iframe src="https://pomo.corentindetry.be/#/" className="h-full w-full overflow-hidden" scrolling="no"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}