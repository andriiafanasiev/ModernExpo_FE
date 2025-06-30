import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function LeadForm() {
    return (
        <section className="w-full max-w-5xl mx-auto mt-16 px-2 md:px-0">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden p-4 md:p-8 gap-8 md:gap-0">
                <form className="flex-1 flex w-full flex-col justify-center gap-4 md:pr-8 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-2">
                        Заповніть заявку
                    </h2>
                    <input
                        type="text"
                        placeholder="Ім'я"
                        className="rounded-xl border w-full  border-gray-400 px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"
                    />
                    <input
                        type="tel"
                        placeholder="Номер телефону"
                        className="rounded-xl border w-full border-gray-400 px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"
                    />
                    <input
                        type="text"
                        placeholder="Назва компанії або діяльність"
                        className="rounded-xl border w-full border-gray-400 px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"
                    />
                    <Button
                        variant="purple"
                        className="mt-2 text-white text-lg md:text-xl font-bold py-3 rounded-xl"
                    >
                        Відправити
                    </Button>
                </form>
                {/* Мапа */}
                <div className="flex-1 flex items-center justify-center order-1 md:order-2 mb-6 md:mb-0">
                    <Image
                        src="/assets/images/ua-map.png"
                        alt="Карта України"
                        className="w-full max-w-[400px] md:max-w-[420px] h-auto"
                        width={400}
                        height={420}
                    />
                </div>
            </div>
        </section>
    );
}
