import { notFound } from 'next/navigation';
import Image from 'next/image';
import cards from '@/components/catalog-cards-data'; // створю окремий файл для cards, щоб шарити між сторінками
import LeadForm from '@/components/forms/LeadForm';

const regionLabels: Record<string, string> = {
    dnp: 'Дніпропетровська',
    kyiv: 'Київська',
    lviv: 'Львівська',
    odesa: 'Одеська',
    kharkiv: 'Харківська',
    zaporizhzhia: 'Запорізька',
    poltava: 'Полтавська',
    vinnytsia: 'Вінницька',
    cherkasy: 'Черкаська',
    chernivtsi: 'Чернівецька',
    ivano: 'Івано-Франківська',
    ternopil: 'Тернопільська',
    volyn: 'Волинська',
    zakarpattia: 'Закарпатська',
    sumy: 'Сумська',
    chernihiv: 'Чернігівська',
    mykolaiv: 'Миколаївська',
    kherson: 'Херсонська',
    zhytomyr: 'Житомирська',
    rivne: 'Рівненська',
    lutsk: 'Луцька',
    uzhhorod: 'Ужгородська',
    kropyvnytskyi: 'Кропивницька',
    luhansk: 'Луганська',
    donetsk: 'Донецька',
};

export default async function BillboardPage({
    params,
}: {
    params: { id: string };
}) {
    const billboard = cards.find((card) => card.id === Number(params.id));
    if (!billboard) return notFound();
    const others = cards
        .filter(
            (card) => card.id !== billboard.id && card.city === billboard.city
        )
        .slice(0, 3);

    return (
        <>
            <section className="w-full bg-[var(--color-purple)] bg-[url('/assets/images/bg.svg')] bg-cover bg-center pt-22 md:pt-28 py-12 md:py-20 text-white text-center">
                <h1 className="text-2xl md:text-4xl text-center font-bold mb-3">
                    Детальна інформація про рекламну площину
                </h1>
                <p className="text-base md:text-lg max-w-2xl mx-auto">
                    Переглянь характеристики вибраної локації та залиш заявку
                    для швидкого звʼязку з нами.
                </p>
            </section>

            <main className="w-full max-w-6xl mx-auto mt-8 px-4 md:px-0">
                <a
                    href="/catalog"
                    className="text-gray-400 text-base mb-4 hover:underline"
                >
                    &larr; Назад
                </a>
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-stretch">
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <Image
                            src={billboard.img}
                            alt={billboard.city}
                            width={420}
                            height={260}
                            className="rounded-xl object-cover w-full h-60 md:h-72"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2 justify-between">
                        <div className="flex flex-row-reverse items-start justify-between mb-2">
                            <button
                                className="w-12 h-8 rounded-full border-2 border-[var(--color-purple)] flex items-center justify-center bg-white text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white transition-colors"
                                type="button"
                                aria-label="Додати до кошика"
                            >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.80722 26C7.09156 26 6.47912 25.7456 5.96992 25.2369C5.46071 24.7281 5.20568 24.1158 5.20481 23.4C5.20394 22.6841 5.45898 22.0722 5.96992 21.5644C6.48086 21.0565 7.09329 20.8017 7.80722 20.8C8.52114 20.7982 9.13401 21.053 9.64581 21.5644C10.1576 22.0757 10.4122 22.6876 10.4096 23.4C10.407 24.1124 10.1524 24.7247 9.64581 25.2369C9.13921 25.7491 8.52635 26.0034 7.80722 26ZM20.8192 26C20.1036 26 19.4911 25.7456 18.9819 25.2369C18.4727 24.7281 18.2177 24.1158 18.2168 23.4C18.216 22.6841 18.471 22.0722 18.9819 21.5644C19.4929 21.0565 20.1053 20.8017 20.8192 20.8C21.5332 20.7982 22.146 21.053 22.6578 21.5644C23.1696 22.0757 23.4242 22.6876 23.4216 23.4C23.419 24.1124 23.1644 24.7247 22.6578 25.2369C22.1512 25.7491 21.5384 26.0034 20.8192 26ZM5.46505 2.6H24.6578C25.1566 2.6 25.5361 2.8223 25.7963 3.2669C26.0566 3.7115 26.0674 4.16086 25.8289 4.61499L21.2096 12.935C20.971 13.3683 20.6514 13.7041 20.2506 13.9425C19.8498 14.1808 19.4105 14.3 18.9325 14.3H9.23854L7.80722 16.9H22.1204C22.4891 16.9 22.7984 17.0248 23.0482 17.2744C23.298 17.524 23.4225 17.8325 23.4216 18.2C23.4208 18.5674 23.2959 18.8764 23.0469 19.1269C22.7979 19.3773 22.4891 19.5017 22.1204 19.5H7.80722C6.83131 19.5 6.09397 19.0723 5.59517 18.2169C5.09638 17.3615 5.07469 16.5108 5.53011 15.665L7.28674 12.48L2.60241 2.6H1.30121C0.932533 2.6 0.623714 2.4752 0.374751 2.2256C0.125787 1.976 0.000871955 1.66746 4.4869e-06 1.3C-0.000862981 0.932532 0.124052 0.623999 0.374751 0.3744C0.625449 0.1248 0.934267 0 1.30121 0H3.41566C3.65421 0 3.88192 0.065 4.09879 0.195C4.31566 0.325 4.47831 0.509166 4.58674 0.747499L5.46505 2.6Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <div className="flex flex-col gap-2 text-base md:text-lg">
                                <div>
                                    <b>Область</b>{' '}
                                    <span className="ml-2">
                                        {regionLabels[billboard.region] ||
                                            billboard.region}
                                    </span>
                                </div>
                                <div>
                                    <b>Місто</b>{' '}
                                    <span className="ml-2">
                                        {billboard.city}
                                    </span>
                                </div>
                                <div>
                                    <b>Адреса</b>{' '}
                                    <span className="ml-2">
                                        {billboard.address}
                                    </span>
                                </div>
                                <div>
                                    <b>Розмір</b>{' '}
                                    <span className="ml-2">6x3</span>
                                </div>
                                <div>
                                    <b>Сторона</b>{' '}
                                    <span className="ml-2">A</span>
                                </div>
                                <div>
                                    <b>Тип</b>{' '}
                                    <span className="ml-2">Відеоборд</span>
                                </div>
                                <div>
                                    <b>Код</b>{' '}
                                    <span className="ml-2">26779</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="w-full max-w-6xl mx-auto mt-8 px-4 md:px-0 flex flex-col md:flex-row gap-8">
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-4 md:p-8 flex items-center justify-center">
                    <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                            billboard.address + ', ' + billboard.city
                        )}&output=embed`}
                        width="100%"
                        height="260"
                        className="rounded-xl w-full h-full  border-none"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Мапа"
                    />
                </div>
                <div className="flex-1">
                    <LeadForm
                        className="h-full mt-0 md:mt-0"
                        title="Залиште заявку щоб ми з Вами звʼязались"
                        buttonText="Надіслати"
                        mapEmbed={
                            <iframe
                                src={`https://www.google.com/maps?q=${encodeURIComponent(
                                    billboard.address + ', ' + billboard.city
                                )}&output=embed`}
                                width="100%"
                                height="100%"
                                className="w-full h-full border-none"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Мапа"
                            />
                        }
                    />
                </div>
            </section>

            {others.length > 0 && (
                <section className="w-full max-w-6xl mx-auto mt-12 px-4 md:px-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Площини поряд
                    </h2>
                    <div
                        className={`grid ${
                            others.length < 3
                                ? 'grid-cols-1 md:grid-cols-2'
                                : 'grid-cols-1 md:grid-cols-3'
                        } gap-6`}
                    >
                        {others.map((card) => (
                            <div
                                key={card.id}
                                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full"
                            >
                                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={card.img}
                                        alt={card.city}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative flex-1 flex flex-col gap-1 mb-4">
                                    <span className="font-semibold text-lg">
                                        м.{card.city}
                                    </span>
                                    <span className="text-sm text-black/80">
                                        {card.address}
                                    </span>
                                    <button
                                        className="absolute top-0 right-0 w-12 h-8 rounded-full border-2 border-[var(--color-purple)] flex items-center justify-center bg-white text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white transition-colors"
                                        type="button"
                                        aria-label="Додати до кошика"
                                    >
                                        <svg
                                            width="19"
                                            height="19"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.80722 26C7.09156 26 6.47912 25.7456 5.96992 25.2369C5.46071 24.7281 5.20568 24.1158 5.20481 23.4C5.20394 22.6841 5.45898 22.0722 5.96992 21.5644C6.48086 21.0565 7.09329 20.8017 7.80722 20.8C8.52114 20.7982 9.13401 21.053 9.64581 21.5644C10.1576 22.0757 10.4122 22.6876 10.4096 23.4C10.407 24.1124 10.1524 24.7247 9.64581 25.2369C9.13921 25.7491 8.52635 26.0034 7.80722 26ZM20.8192 26C20.1036 26 19.4911 25.7456 18.9819 25.2369C18.4727 24.7281 18.2177 24.1158 18.2168 23.4C18.216 22.6841 18.471 22.0722 18.9819 21.5644C19.4929 21.0565 20.1053 20.8017 20.8192 20.8C21.5332 20.7982 22.146 21.053 22.6578 21.5644C23.1696 22.0757 23.4242 22.6876 23.4216 23.4C23.419 24.1124 23.1644 24.7247 22.6578 25.2369C22.1512 25.7491 21.5384 26.0034 20.8192 26ZM5.46505 2.6H24.6578C25.1566 2.6 25.5361 2.8223 25.7963 3.2669C26.0566 3.7115 26.0674 4.16086 25.8289 4.61499L21.2096 12.935C20.971 13.3683 20.6514 13.7041 20.2506 13.9425C19.8498 14.1808 19.4105 14.3 18.9325 14.3H9.23854L7.80722 16.9H22.1204C22.4891 16.9 22.7984 17.0248 23.0482 17.2744C23.298 17.524 23.4225 17.8325 23.4216 18.2C23.4208 18.5674 23.2959 18.8764 23.0469 19.1269C22.7979 19.3773 22.4891 19.5017 22.1204 19.5H7.80722C6.83131 19.5 6.09397 19.0723 5.59517 18.2169C5.09638 17.3615 5.07469 16.5108 5.53011 15.665L7.28674 12.48L2.60241 2.6H1.30121C0.932533 2.6 0.623714 2.4752 0.374751 2.2256C0.125787 1.976 0.000871955 1.66746 4.4869e-06 1.3C-0.000862981 0.932532 0.124052 0.623999 0.374751 0.3744C0.625449 0.1248 0.934267 0 1.30121 0H3.41566C3.65421 0 3.88192 0.065 4.09879 0.195C4.31566 0.325 4.47831 0.509166 4.58674 0.747499L5.46505 2.6Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <a
                                    href={`/catalog/${card.id}`}
                                    className="mt-2 block w-full"
                                >
                                    <button className="w-full bg-[var(--color-purple)] text-white rounded-2xl text-base md:text-lg py-2 font-bold">
                                        Детальніше
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
