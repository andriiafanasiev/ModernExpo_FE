import Image from 'next/image';
import Button from '@/components/ui/Button';
import CatalogSection from '@/components/CatalogSection';
import LeadForm from '@/components/forms/LeadForm';
import ReviewsSection from '@/components/common/ReviewsSection';

export default function Home() {
    return (
        <>
        <main
            className="relative min-h-[calc(100vh-80px)] flex flex-col sm:flex-row items-stretch justify-between bg-[var(--color-bg)] overflow-hidden"
            style={{
                backgroundImage: "url('/assets/images/bg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="absolute inset-0 opacity-90 z-0"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
                    }}
            />
                <div className="relative z-10 flex font-semibold font-gotham flex-1 flex-col items-center md:items-start justify-center pt-30 sm:pt-0 pl-6 md:pl-12 gap-8 max-w-[600px]">
                    <h1 className="text-5xl hidden md:block md:text-6xl font-bold text-white leading-tight">
                    Реклама на <br /> білбордах по <br /> всій Україні
                </h1>
                    <h1 className="text-5xl text-center  md:hidden font-bold text-white leading-tight">
                        Реклама на <br /> білбордах по всій <br /> Україні
                    </h1>
                    <Button
                        variant="white"
                        className="max-w-sm rounded-3xl md:rounded-xl  text-2xl"
                    >
                    Каталог
                </Button>
                    <span className="text-white/80 hidden md:block text-lg pt-4">
                    Працюємо з 2015 року
                </span>
            </div>
                <div className="relative mt-5 md:mt-0 z-10 flex flex-1 items-center sm:items-end justify-center pr-3 md:pr-0">
                <div className="relative w-full max-w-[706px] aspect-[706/555] h-auto flex items-center justify-center">
                    <Image
                        src="/assets/images/bilboard.png"
                        alt="Білборд"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 706px"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] flex flex-col items-center">
                            <span className="text-2xl md:text-[40px] text-[var(--color-purple)] font-bold text-center drop-shadow-md">
                            ТУТ МОЖЕ БУТИ
                            <br />
                            ВАША РЕКЛАМА
                        </span>
                        <Button
                            variant="purple"
                                className="max-w-xs rounded-3xl md:rounded-xl w-full mt-12 text-xl "
                        >
                            Залишити заявку
                        </Button>
                    </div>
                </div>
            </div>
        </main>
            <section className="relative z-10 w-full max-w-6xl mx-auto mt-12 px-4 md:px-0 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-stretch">
                <div className="flex flex-col items-center md:hidden">
                    <a
                        href="#"
                        className="text-[var(--color-purple)] block md:hidden text-center underline text-base mt-2 md:mt-4 w-fit"
                    >
                        Каталог
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-[420px] aspect-[16/10] h-[350px] md:h-auto bg-[#CDBFE0] rounded-2xl flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-semibold text-black">
                            Відео
                        </span>
                    </div>
                </div>
                <section className="w-full max-w-xs mx-auto mt-8 px-4 flex flex-col items-center gap-10 md:hidden">
                    <div className="flex w-full justify-between gap-10">
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-[2.7rem] font-bold text-[var(--color-purple)] leading-none">
                                10
                            </span>
                            <span className="text-base mt-2">
                                Років на ринку
                            </span>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-[2.7rem] font-bold text-[var(--color-purple)] leading-none">
                                500+
                            </span>
                            <span className="text-base mt-2 text-center">
                                Задоволених
                                <br />
                                клієнтів
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-[2.7rem] font-bold text-[var(--color-purple)] leading-none">
                                2000+
                            </span>
                            <span className="text-base mt-2 text-center">
                                Площин по всій Україні
                            </span>
                        </div>
                    </div>
                </section>
                <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6">
                    <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold mb-2 md:mb-4">
                        Про нас
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        Ми команда професіоналів з понад 10-річним досвідом у
                        сфері зовнішньої реклами, допомагаємо брендам бути
                        помітними, впізнаваними та ефективно взаємодіяти зі
                        своєю аудиторією.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        Нам довіряють десятки відомих компаній, адже ми це
                        стабільність, надійність та якість, перевірені часом.
                    </p>
                    <a
                        href="#"
                        className="text-[var(--color-purple)] hidden md:block underline text-base md:text-lg mt-2 md:mt-4 w-fit"
                    >
                        Каталог
                    </a>
                </div>
            </section>

            <section className="w-full hidden md:grid max-w-6xl mx-auto mt-8 px-4 md:px-0  grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center py-8 md:py-10">
                <div className="flex flex-col items-center">
                    <span className="text-[2.5rem] md:text-8xl font-bold text-[var(--color-purple)] leading-none">
                        10
                    </span>
                    <span className="text-base md:text-lg mt-2">
                        Років на ринку
                    </span>
                </div>
                <div className="flex flex-col items-center md:border-l md:border-r border-[#CDBFE0]">
                    <span className="text-[2.5rem] md:text-8xl font-bold text-[var(--color-purple)] leading-none">
                        500+
                    </span>
                    <span className="text-base md:text-lg mt-2">
                        Задоволених клієнтів
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[2.5rem] md:text-8xl font-bold text-[var(--color-purple)] leading-none">
                        2000+
                    </span>
                    <span className="text-base md:text-lg mt-2">
                        Площин по всій Україні
                    </span>
                </div>
            </section>

            <section className="w-full max-w-6xl mx-auto mt-12 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
                    Наші переваги
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <span className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-purple)] mb-2">
                            <Image
                                src="/assets/icons/advantage-1.svg"
                                alt="Гнучке ціноутворення"
                                width={64}
                                height={64}
                            />
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            Гнучке ціноутворення
                        </h3>
                        <p className="text-sm md:text-base text-black/80 max-w-xs">
                            У нас немає &quot;прайсу на всіх&quot;. Кожна
                            кампанія — з гнучким бюджетом, вигідними знижками й
                            чесними умовами.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-purple)] mb-2">
                            <Image
                                src="/assets/icons/advantage-2.svg"
                                alt="Точність до метра"
                                width={64}
                                height={64}
                            />
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            Реклама з точністю до метра
                        </h3>
                        <p className="text-sm md:text-base text-black/80 max-w-xs">
                            Шукаєте борд? Ми знайдемо ідеальний — хоч у центрі
                            Києва, хоч посеред Карпат. Працюємо під вас, не
                            шаблонно.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-purple)] mb-2">
                            <Image
                                src="/assets/icons/advantage-3.svg"
                                alt="Досвід, що говорить"
                                width={64}
                                height={64}
                            />
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            Досвід, що говорить
                        </h3>
                        <p className="text-sm md:text-base text-black/80 max-w-xs">
                            На ринку з 2015-го. Власна мережа площин + надійні
                            партнери по всій країні = ваша кампанія під повним
                            контролем.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-6xl mx-auto mt-12 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
                    Наші клієнти та партнери
                </h2>
                <div className="flex flex-col gap-8 md:gap-10 items-center">
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 w-full">
                        <Image
                            src="/assets/images/partners/vartis.png"
                            alt="Vartis"
                            width={240}
                            height={90}
                            className="object-contain h-[90px]"
                        />
                        <Image
                            src="/assets/images/partners/kromberg.png"
                            alt="Kromberg & Schubert"
                            width={300}
                            height={90}
                            className="object-contain h-[90px]"
                        />
                        <Image
                            src="/assets/images/partners/atb.png"
                            alt="АТБ"
                            width={180}
                            height={90}
                            className="object-contain h-[90px]"
                        />
                        <Image
                            src="/assets/images/partners/modern-expo.png"
                            alt="Modern Expo"
                            width={260}
                            height={90}
                            className="object-contain h-[90px]"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 w-full">
                        <Image
                            src="/assets/images/partners/jasmine.png"
                            alt="Jasmine"
                            width={240}
                            height={90}
                            className="object-contain h-[90px]"
                        />
                        <Image
                            src="/assets/images/partners/epicentr.png"
                            alt="Епіцентр"
                            width={300}
                            height={90}
                            className="object-contain h-[90px]"
                        />
                    </div>
                </div>
            </section>
            <CatalogSection />

            <ReviewsSection />
            <section id="contact">
                <LeadForm />
            </section>
        </>
    );
}
