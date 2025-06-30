export default function Footer() {
    return (
        <footer className="bg-[#F7F7F7] w-full py-6 px-4 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
                <div className="font-bold text-xl mb-2 md:mb-0">Лого</div>
                <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8 md:items-center w-full md:w-auto justify-center">
                    <span className="font-semibold">+380 95 615 67 18</span>
                    <a href="#" className="font-semibold hover:underline">
                        Політика конфедеційності
                    </a>
                    <a href="#" className="font-semibold hover:underline">
                        Публічна оферта
                    </a>
                </div>
            </div>
        </footer>
    );
}
